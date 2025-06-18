// CodeEditor.tsx
import { useEffect, useState } from "react";
import { LANGUAGES } from "@/constants";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "./ui/resizable";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { AlertCircleIcon, BookIcon, LightbulbIcon, RefreshCwIcon } from "lucide-react";
import Editor from "@monaco-editor/react";
import { Button } from "./ui/button";

const SOURCES = ["leetcode", "codeforces"] as const;
type SourceType = typeof SOURCES[number];

function CodeEditor() {
  const [selectedQuestion, setSelectedQuestion] = useState<any | null>(null);
  const [language, setLanguage] = useState<(typeof LANGUAGES)[number]["id"]>(LANGUAGES[0].id);
  const [code, setCode] = useState<string>("");
  const [source, setSource] = useState<SourceType>("leetcode");
  const [loading, setLoading] = useState(true);

  const fetchQuestion = async (sourceType: SourceType) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/${sourceType}`, {
  cache: "no-store",
});
      const data = await res.json();
      setSelectedQuestion(data);
      if (sourceType === "leetcode") {
        setCode(data.starterCode?.[language] || "");
      } else {
        setCode(templates[language] || "// Start coding");
      }
    } catch (err) {
      console.error("Failed to load question", err);
    } finally {
      setLoading(false);
    }
  };

  const templates: Record<string, string> = {
    javascript: "// Write your solution for Codeforces problem\n",
    typescript: "// Write your solution for Codeforces problem\n",
    python: "# Write your solution for Codeforces problem\n",
    java: "public class Solution {\n    public static void main(String[] args) {\n        // Codeforces problem solution here\n    }\n}",
    cpp: "#include <iostream>\nusing namespace std;\nint main() {\n    // Codeforces problem solution here\n    return 0;\n}",
  };

  useEffect(() => {
    fetchQuestion(source);
  }, [source]);

  useEffect(() => {
    if (!selectedQuestion) return;
    if (source === "leetcode") {
      setCode(selectedQuestion.starterCode?.[language] || "");
    } else {
      setCode(templates[language] || "// Start coding");
    }
  }, [language, selectedQuestion, source]);

  return (
    <ResizablePanelGroup direction="vertical" className="min-h-[calc(100vh-4rem-1px)]">
      <ResizablePanel>
        <ScrollArea className="h-full">
          <div className="p-6">
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-semibold tracking-tight">
                      {selectedQuestion ? selectedQuestion.title : "Loading Question..."}
                    </h2>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Choose your language and solve the problem
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => fetchQuestion(source)}
                    disabled={loading}
                  >
                    <RefreshCwIcon className="w-4 h-4 mr-1" />
                    New {source.charAt(0).toUpperCase() + source.slice(1)} Problem
                  </Button>

                  <Select value={source} onValueChange={(val) => setSource(val as SourceType)}>
                    <SelectTrigger className="w-[150px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {SOURCES.map((src) => (
                        <SelectItem key={src} value={src}>
                          {src.charAt(0).toUpperCase() + src.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select
                    value={language}
                    onValueChange={(val) => setLanguage(val as (typeof LANGUAGES)[number]["id"])}
                  >
                    <SelectTrigger className="w-[150px]">
                      <SelectValue>
                        <div className="flex items-center gap-2">
                          <img
                            src={`/${language}.png`}
                            alt={language}
                            className="w-5 h-5 object-contain"
                          />
                          {LANGUAGES.find((l) => l.id === language)?.name}
                        </div>
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      {LANGUAGES.map((lang) => (
                        <SelectItem key={lang.id} value={lang.id}>
                          <div className="flex items-center gap-2">
                            <img
                              src={`/${lang.id}.png`}
                              alt={lang.name}
                              className="w-5 h-5 object-contain"
                            />
                            {lang.name}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {selectedQuestion && source === "leetcode" && (
                <>
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-2">
                      <BookIcon className="h-5 w-5 text-primary/80" />
                      <CardTitle>Problem Description</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm leading-relaxed">
                      <div
                        className="prose prose-sm dark:prose-invert max-w-none"
                        dangerouslySetInnerHTML={{ __html: selectedQuestion.description }}
                      />
                    </CardContent>
                  </Card>

                  {selectedQuestion.examples?.length > 0 && (
                    <Card>
                      <CardHeader className="flex flex-row items-center gap-2">
                        <LightbulbIcon className="h-5 w-5 text-yellow-500" />
                        <CardTitle>Examples</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ScrollArea className="h-full w-full rounded-md border">
                          <div className="p-4 space-y-4">
                            {selectedQuestion.examples.map((example: any, index: number) => (
                              <div key={index} className="space-y-2">
                                <p className="font-medium text-sm">Example {index + 1}:</p>
                                <ScrollArea className="h-full w-full rounded-md">
                                  <pre className="bg-muted/50 p-3 rounded-lg text-sm font-mono">
                                    <div>Input: {example.input}</div>
                                    <div>Output: {example.output}</div>
                                  </pre>
                                  <ScrollBar orientation="horizontal" />
                                </ScrollArea>
                              </div>
                            ))}
                          </div>
                          <ScrollBar />
                        </ScrollArea>
                      </CardContent>
                    </Card>
                  )}

                  {selectedQuestion.constraints?.length > 0 && (
                    <Card>
                      <CardHeader className="flex flex-row items-center gap-2">
                        <AlertCircleIcon className="h-5 w-5 text-blue-500" />
                        <CardTitle>Constraints</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc list-inside space-y-1.5 text-sm marker:text-muted-foreground">
                          {selectedQuestion.constraints.map((constraint: string, index: number) => (
                            <li key={index} className="text-muted-foreground">
                              {constraint}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  )}
                </>
              )}

              {selectedQuestion && source === "codeforces" && (
                <Card>
                  <CardHeader className="flex flex-row items-center gap-2">
                    <BookIcon className="h-5 w-5 text-primary/80" />
                    <CardTitle>Codeforces Problem</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm leading-relaxed">
                    <div
                      className="prose prose-sm dark:prose-invert max-w-none"
                      dangerouslySetInnerHTML={{ __html: selectedQuestion.description }}
                    />
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
          <ScrollBar />
        </ScrollArea>
      </ResizablePanel>

      <ResizableHandle withHandle />

      <ResizablePanel defaultSize={60} maxSize={100}>
        <div className="h-full relative">
          <Editor
            height="100%"
            defaultLanguage={language}
            language={language}
            theme="vs-dark"
            value={code}
            onChange={(value) => setCode(value || "")}
            options={{
              minimap: { enabled: false },
              fontSize: 18,
              lineNumbers: "on",
              scrollBeyondLastLine: false,
              automaticLayout: true,
              padding: { top: 16, bottom: 16 },
              wordWrap: "on",
              wrappingIndent: "indent",
            }}
          />
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

export default CodeEditor;
