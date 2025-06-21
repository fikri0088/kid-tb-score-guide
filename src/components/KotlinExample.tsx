import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Code } from "lucide-react";
import kotlinCode from '../../kotlin/TbScoring.kt?raw';

const KotlinExample = ({ onBack }) => (
  <div className="max-w-4xl mx-auto">
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl flex items-center">
              <Code className="h-6 w-6 mr-2 text-blue-600" />
              Contoh Kotlin
            </CardTitle>
            <CardDescription>
              Implementasi logika penilaian risiko TB versi Kotlin
            </CardDescription>
          </div>
          <Button variant="outline" onClick={onBack}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Kembali
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <pre className="whitespace-pre overflow-auto text-sm bg-gray-900 text-gray-100 p-4 rounded-md">
{kotlinCode}
        </pre>
        <div className="mt-4 text-sm">
          <p className="mb-1 text-gray-600">Kompilasi dan jalankan:</p>
          <pre className="bg-gray-100 p-2 rounded">
kotlinc TbScoring.kt -include-runtime -d TbScoring.jar
java -jar TbScoring.jar
          </pre>
        </div>
      </CardContent>
    </Card>
  </div>
);

export default KotlinExample;
