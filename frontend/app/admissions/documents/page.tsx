import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, AlertTriangle, CheckCircle, Download, GraduationCap, Clock, Users, Shield } from "lucide-react"

export default function DocumentsPage() {
  const documents = [
    "CET Cell Registration Application Form",
    "NEET UG Admit Card",
    "NEET Score Card",
    "Selection Letter",
    "S.S.C. Mark Sheet",
    "S.S.C. Diploma/Certificate",
    "H.S.C. Mark Sheet",
    "H.S.C. Diploma/Certificate",
    "Leaving Certificate",
    "Domicile / Nationality Certificate",
    "Caste Certificate (for reserved category)",
    "Caste Validity Certificate (Mandatory for reserved category)",
    "Non-Creamy Layer Certificate (if applicable)",
    "Medical Fitness Certificate (as per NEET Brochure format)",
    "Migration Certificate (if applicable)",
    "Gap Certificate (if applicable)",
    "EWS or Minority Certificate / Affidavit (if applicable)",
    "Aadhar Card (attested Xerox)",
    "5 Passport-size Photographs",
    "Xerox of Nationalized Bank Passbook",
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-[#2D6CDF] to-[#1E4FBF] text-white overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 bg-white clip-path-hexagon"></div>
            <div className="absolute bottom-20 right-20 w-16 h-16 bg-teal-300 clip-path-hexagon"></div>
            <div className="absolute top-40 right-40 w-12 h-12 bg-green-300 clip-path-hexagon"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm font-mono">
                  ADMISSION REQUIREMENTS
                </Badge>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading leading-tight">
                List of Documents Required for B.P.Th.
              </h1>

              <p className="text-xl md:text-2xl text-blue-100 font-sans leading-relaxed">
                For Selected Candidates by DMER - Academic Year 2025–2026
              </p>
            </div>
          </div>
        </section>

        {/* Important Instructions Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="border-l-4 border-l-orange-500 bg-orange-50 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="h-8 w-8 text-orange-600 flex-shrink-0 mt-1" />
                    <div>
                      <h2 className="text-2xl font-bold text-orange-800 mb-4 font-heading">Important Instructions</h2>
                      <p className="text-lg text-orange-700 leading-relaxed font-sans">
                        Selected candidates must submit all original documents along with{" "}
                        <strong className="text-orange-800">three sets of attested photocopies</strong> at the time of
                        admission. All documents should be presented in the order listed below.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Documents Checklist Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4 font-heading">
                  Required Documents Checklist
                </h2>
                <p className="text-lg text-neutral-600 font-sans">
                  Please ensure all documents are arranged in the following order
                </p>
              </div>

              <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-blue-50">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    {documents.map((document, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 group"
                      >
                        <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-[#2D6CDF] to-[#1E4FBF] text-white rounded-full font-bold text-sm flex-shrink-0">
                          {index + 1}
                        </div>
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span className="text-lg font-medium text-neutral-700 group-hover:text-blue-700 transition-colors font-sans">
                          {document}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Document Verification */}
                <Card className="shadow-lg border-0 bg-white">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                        <Shield className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-neutral-800 font-heading">Document Verification</h3>
                    </div>
                    <ul className="space-y-3 text-neutral-600 font-sans">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>All documents must be original with attested copies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Attestation should be done by Gazetted Officer</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Documents in regional language need English translation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Incomplete documentation will lead to rejection</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Submission Timeline */}
                <Card className="shadow-lg border-0 bg-white">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-neutral-800 font-heading">Submission Timeline</h3>
                    </div>
                    <ul className="space-y-3 text-neutral-600 font-sans">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Submit within 7 days of selection notification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Office hours: 9:00 AM to 5:00 PM (Mon-Sat)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Late submissions will not be accepted</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Contact admission office for any queries</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Important Note Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="border-l-4 border-l-red-500 bg-red-50 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="h-8 w-8 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-2xl font-bold text-red-800 mb-4 font-heading">Important Note</h3>
                      <p className="text-lg text-red-700 leading-relaxed font-sans">
                        <strong className="text-red-800">NOTE:</strong> All original documents are required{" "}
                        <strong className="text-red-800">with three sets of attested Xerox copies.</strong> Failure to
                        provide complete documentation will result in admission cancellation.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-gradient-to-r from-[#2D6CDF] to-[#1E4FBF] text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-24 h-24 bg-white clip-path-hexagon"></div>
            <div className="absolute bottom-10 left-10 w-20 h-20 bg-teal-300 clip-path-hexagon"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-4 mb-8">
                <GraduationCap className="h-12 w-12 text-white" />
                <Users className="h-12 w-12 text-white" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">Ready to Begin Your Journey?</h2>

              <p className="text-xl text-blue-100 mb-10 leading-relaxed font-sans">
                Download the complete document checklist or start your admission process today
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-[#2D6CDF] hover:bg-blue-50 px-8 py-4 text-lg font-bold shadow-lg rounded-xl font-heading transform hover:scale-105 transition-all duration-300"
                >
                  <Download className="h-5 w-5 mr-3" />
                  Download as PDF
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#2D6CDF] px-8 py-4 text-lg font-bold rounded-xl font-heading transform hover:scale-105 transition-all duration-300 bg-transparent"
                >
                  <GraduationCap className="h-5 w-5 mr-3" />
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
