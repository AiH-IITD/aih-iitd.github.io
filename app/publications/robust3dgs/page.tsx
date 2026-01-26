
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, FileText, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Robust3DGSPage() {
    return (
        <main className="min-h-screen bg-white py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/publications" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 mb-8 transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Publications
                </Link>

                {/* Title Section */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                        Robust and Efficient 3D Gaussian Splatting for Diagnostic Imaging
                    </h1>
                    <div className="flex flex-wrap justify-center gap-4 text-lg text-gray-600 mb-6">
                        <span>Mrinal Tyagi</span>
                        <span>Ashish Suri</span>
                        <span>Chetan Arora</span>
                    </div>
                    <div className="flex justify-center items-center gap-2 mb-8">
                        <Badge variant="outline" className="text-md py-1 px-3">IEEE ISBI 2026</Badge>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        <Button className="gap-2" disabled>
                            <FileText className="h-4 w-4" />
                            Paper
                        </Button>
                        <Button variant="outline" className="gap-2" asChild>
                            <a href="https://github.com/AiH-IITD/Robust3DGS" target="_blank" rel="noopener noreferrer">
                                <Github className="h-4 w-4" />
                                Code
                            </a>
                        </Button>
                    </div>
                </div>

                {/* Abstract */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Abstract</h2>
                    <p className="text-gray-700 leading-relaxed text-lg text-justify">
                        3D Gaussian Splatting (3DGS) has emerged as a popular technique for neural rendering. Use of simple Gaussian primitives that enable real-time rendering, faster training, and high visual fidelity makes its use compelling over alternatives like NeRFs. However, despite its success in natural image settings, 3DGS encounters notable rendering challenges in medical imaging. Our analysis reveals that the error characteristics of sparse reconstruction pipelines (e.g., COLMAP), which serve input to the 3DGS pipeline, differ significantly between medical and natural environments. This discrepancy leads to degraded rendering performance when noise propagates from sparsely reconstructed inputs. To address this issue, we introduce a novel opacity-based regularization strategy for 3DGS that yields two key benefits: (1) enhanced rendering quality through suppression of noisy Gaussian components, and (2) substantial reduction in the number of Gaussian primitives required, improving rendering efficiency. Experiments on two medical datasets validate the effectiveness of our approach. On the C3VD dataset, our method achieves an average PSNR improvement of 0.42 dB and reduces the number of Gaussians by 14,137 per sequence. On the EndoMap-per dataset, we observe an average PSNR gain of 1.60 dB with a reduction of 91,522 Gaussians per sequence.
                    </p>
                </section>

                {/* Teaser Image Placeholder */}
                <section className="mb-16">
                    <div className="w-full bg-gray-50 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                        <Image
                            src="/images/paper-architectures/robust3dgs/robust3dgs.png"
                            alt="Robust 3D Gaussian Splatting"
                            width={1200}
                            height={600}
                            className="w-full h-auto"
                            priority
                        />
                    </div>
                    <p className="mt-4 text-center text-gray-500 italic">Figure 1: Samples of the Robust 3D Gaussian Splatting framework.</p>
                </section>

                {/* Citation */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Citation</h2>
                    <Card className="bg-gray-50 border-gray-200">
                        <CardContent className="p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-700 font-mono whitespace-pre">{`@inproceedings{sanghvi2026attend,
  title={Robust and Efficient 3D Gaussian Splatting for Diagnostic Imaging},
  author={Tyagi, Mrinal and Suri, Ashish and Arora, Chetan},
  booktitle={IEEE International Symposium on Biomedical Imaging (ISBI)},
  year={2026}
}`}</pre>
                        </CardContent>
                    </Card>
                </section>
            </div>
        </main>
    );
}
