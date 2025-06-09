
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowDown, ArrowRight, User, FileText, ClipboardList, BarChart3, CheckCircle } from "lucide-react";

const SystemFlowDiagram = ({ onBack }) => {
  const flowSteps = [
    {
      id: 1,
      title: "Login ke Sistem",
      description: "Akses mudah tanpa registrasi",
      icon: <User className="h-6 w-6" />,
      color: "bg-blue-100 border-blue-300",
      iconColor: "text-blue-600"
    },
    {
      id: 2,
      title: "Input Data Pasien",
      description: "ID, usia, BB, TB, jenis kelamin",
      icon: <FileText className="h-6 w-6" />,
      color: "bg-green-100 border-green-300",
      iconColor: "text-green-600"
    },
    {
      id: 3,
      title: "Penilaian Risiko TB",
      description: "7 pertanyaan berdasarkan kriteria IDAI",
      icon: <ClipboardList className="h-6 w-6" />,
      color: "bg-purple-100 border-purple-300",
      iconColor: "text-purple-600"
    },
    {
      id: 4,
      title: "Perhitungan Skor",
      description: "Sistem menghitung total skor otomatis",
      icon: <BarChart3 className="h-6 w-6" />,
      color: "bg-orange-100 border-orange-300",
      iconColor: "text-orange-600"
    },
    {
      id: 5,
      title: "Hasil & Rekomendasi",
      description: "Tingkat risiko dan saran klinis",
      icon: <CheckCircle className="h-6 w-6" />,
      color: "bg-emerald-100 border-emerald-300",
      iconColor: "text-emerald-600"
    }
  ];

  const assessmentCriteria = [
    "Riwayat kontak/paparan TB",
    "Uji Tuberkulin (Mantoux)",
    "Status gizi (BB/TB)",
    "Demam tanpa sebab jelas",
    "Batuk kronik",
    "Pembesaran kelenjar limfe",
    "Foto toraks (rontgen dada)"
  ];

  const riskLevels = [
    { level: "Rendah", score: "< 4", color: "bg-green-100 text-green-800", action: "Pemantauan rutin" },
    { level: "Sedang", score: "4-5", color: "bg-yellow-100 text-yellow-800", action: "Evaluasi lebih lanjut" },
    { level: "Tinggi", score: "≥ 6", color: "bg-red-100 text-red-800", action: "Pengobatan OAT" }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl flex items-center">
                <BarChart3 className="h-6 w-6 mr-2 text-blue-600" />
                Diagram Alur Sistem Penilaian TB Anak
              </CardTitle>
              <CardDescription>
                Alur proses lengkap dari login hingga hasil penilaian berdasarkan pedoman IDAI
              </CardDescription>
            </div>
            <Button variant="outline" onClick={onBack}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Kembali
            </Button>
          </div>
        </CardHeader>
      </Card>

      {/* Main Flow Diagram */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Alur Proses Utama</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-center lg:justify-between">
            {flowSteps.map((step, index) => (
              <div key={step.id} className="flex flex-col lg:flex-row items-center">
                <div className={`${step.color} border-2 rounded-lg p-4 text-center min-w-[200px]`}>
                  <div className={`${step.iconColor} mb-2 flex justify-center`}>
                    {step.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
                {index < flowSteps.length - 1 && (
                  <div className="flex justify-center my-2 lg:mx-4 lg:my-0">
                    <ArrowDown className="h-6 w-6 text-gray-400 lg:hidden" />
                    <ArrowRight className="h-6 w-6 text-gray-400 hidden lg:block" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Assessment Criteria Details */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Kriteria Penilaian (7 Parameter)</CardTitle>
            <CardDescription>
              Berdasarkan sistem skoring IDAI untuk TB anak
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {assessmentCriteria.map((criteria, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">
                    {index + 1}
                  </div>
                  <span className="text-sm font-medium">{criteria}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Interpretasi Hasil Skor</CardTitle>
            <CardDescription>
              Tingkat risiko berdasarkan total skor yang diperoleh
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {riskLevels.map((risk, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${risk.color}`}>
                      Risiko {risk.level}
                    </span>
                    <span className="font-semibold text-gray-900">Skor {risk.score}</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    <strong>Tindakan:</strong> {risk.action}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Decision Tree */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Pohon Keputusan Klinis</CardTitle>
          <CardDescription>
            Alur pengambilan keputusan berdasarkan hasil penilaian
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="text-center mb-6">
              <div className="bg-blue-600 text-white px-4 py-2 rounded-lg inline-block font-semibold">
                Total Skor TB Anak
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="bg-green-100 border-2 border-green-300 rounded-lg p-4 mb-3">
                  <div className="font-semibold text-green-800 mb-2">Skor &lt; 4</div>
                  <div className="text-sm text-green-600 mb-3">Risiko Rendah</div>
                  <ArrowDown className="h-4 w-4 mx-auto text-green-600" />
                </div>
                <div className="bg-white border rounded-lg p-3 text-sm">
                  <div className="font-medium mb-1">Tindakan:</div>
                  <ul className="text-left text-xs space-y-1">
                    <li>• Pemantauan rutin</li>
                    <li>• Edukasi pencegahan</li>
                    <li>• Kontrol sesuai kebutuhan</li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-yellow-100 border-2 border-yellow-300 rounded-lg p-4 mb-3">
                  <div className="font-semibold text-yellow-800 mb-2">Skor 4-5</div>
                  <div className="text-sm text-yellow-600 mb-3">Risiko Sedang</div>
                  <ArrowDown className="h-4 w-4 mx-auto text-yellow-600" />
                </div>
                <div className="bg-white border rounded-lg p-3 text-sm">
                  <div className="font-medium mb-1">Tindakan:</div>
                  <ul className="text-left text-xs space-y-1">
                    <li>• Pemeriksaan lanjutan</li>
                    <li>• Pantau ketat gejala</li>
                    <li>• Konsultasi spesialis</li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-red-100 border-2 border-red-300 rounded-lg p-4 mb-3">
                  <div className="font-semibold text-red-800 mb-2">Skor ≥ 6</div>
                  <div className="text-sm text-red-600 mb-3">Risiko Tinggi</div>
                  <ArrowDown className="h-4 w-4 mx-auto text-red-600" />
                </div>
                <div className="bg-white border rounded-lg p-3 text-sm">
                  <div className="font-medium mb-1">Tindakan:</div>
                  <ul className="text-left text-xs space-y-1">
                    <li>• Rujuk ke spesialis</li>
                    <li>• Mulai pengobatan OAT</li>
                    <li>• Pemantauan ketat</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Technical Flow */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Alur Teknis Sistem</CardTitle>
          <CardDescription>
            Proses di balik layar sistem penilaian
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="grid md:grid-cols-5 gap-2 text-center text-sm">
              <div className="bg-white rounded p-2 border">
                <div className="font-medium">Input</div>
                <div className="text-xs text-gray-600">Data pasien & jawaban</div>
              </div>
              <div className="hidden md:flex items-center justify-center">
                <ArrowRight className="h-4 w-4 text-blue-600" />
              </div>
              <div className="bg-white rounded p-2 border">
                <div className="font-medium">Validasi</div>
                <div className="text-xs text-gray-600">Cek kelengkapan data</div>
              </div>
              <div className="hidden md:flex items-center justify-center">
                <ArrowRight className="h-4 w-4 text-blue-600" />
              </div>
              <div className="bg-white rounded p-2 border">
                <div className="font-medium">Kalkulasi</div>
                <div className="text-xs text-gray-600">Hitung skor total</div>
              </div>
              <div className="hidden md:flex items-center justify-center">
                <ArrowRight className="h-4 w-4 text-blue-600" />
              </div>
              <div className="bg-white rounded p-2 border">
                <div className="font-medium">Interpretasi</div>
                <div className="text-xs text-gray-600">Tentukan tingkat risiko</div>
              </div>
              <div className="hidden md:flex items-center justify-center">
                <ArrowRight className="h-4 w-4 text-blue-600" />
              </div>
              <div className="bg-white rounded p-2 border">
                <div className="font-medium">Output</div>
                <div className="text-xs text-gray-600">Hasil & rekomendasi</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SystemFlowDiagram;
