
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, FileText, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AttendWhatMattersPage() {
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
                        Attend What Matters: Leveraging Vision Foundational Models for Breast Cancer Classification Using Mammograms
                    </h1>
                    <div className="flex flex-wrap justify-center gap-4 text-lg text-gray-600 mb-6">
                        <span>Samyak Sanghvi</span>
                        <span>Piyush Miglani</span>
                        <span>Sarvesh Shashikumar</span>
                        <span>Kaustubh R Borgavi</span>
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
                            <a href="https://github.com/AiH-IITD/attend-what-matters-ISBI-2026" target="_blank" rel="noopener noreferrer">
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
                        Vision Transformers (ViTs) have become the architecture of choice for many computer vision tasks, yet their performance in computer-aided diagnostics remains limited. Focusing on breast cancer detection from mammograms (BCDM), we identify two main causes for this shortfall. First, medical images are high-resolution with small abnormalities, leading to an excessive number of tokens and making it difficult for the softmax-based attention to localize and attend to relevant regions. Second, medical image classification is inherently fine-grained, with low inter-class and high intra-class variability, where standard cross-entropy training is insufficient. To overcome these challenges, we propose a framework with three key components: (1) Region of interest (RoI) based token reduction using an object detection model to guide attention; (2) contrastive learning between selected RoIs to enhance fine-grained discrimination through hard-negative based training; and (3) a DINOv2 pretrained ViT that captures localization-aware, fine-grained features instead of global CLIP representations. Experiments on public mammography datasets demonstrate that our method achieves superior performance over existing baselines, establishing its effectiveness and potential clinical utility for large-scale breast cancer screening.
                    </p>
                </section>

                {/* Teaser Image Placeholder */}
                <section className="mb-16">
                    <div className="w-full bg-gray-50 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                        <Image
                            src="/images/paper-architectures/attend-what-matters/attend-what-matters.png"
                            alt="Attend What Matters Architecture"
                            width={1200}
                            height={600}
                            className="w-full h-auto"
                            priority
                        />
                    </div>
                    <p className="mt-4 text-center text-gray-500 italic">Figure 1: Overview of the Attend What Matters framework.</p>
                </section>

                {/* Results Table */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Results</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm text-center border-collapse">
                            <thead>
                                <tr className="bg-gray-100 border-b-2 border-gray-200">
                                    <th className="px-4 py-3 text-left font-bold text-gray-900">Method</th>
                                    <th className="px-4 py-3 font-bold text-gray-900">AUC</th>
                                    <th className="px-4 py-3 font-bold text-gray-900">F1</th>
                                    <th className="px-4 py-3 font-bold text-gray-900">R@0.1</th>
                                    <th className="px-4 py-3 font-bold text-gray-900">R@0.3</th>
                                    <th className="px-4 py-3 font-bold text-gray-900">R@0.5</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                <tr className="bg-blue-50/50"><td colSpan={6} className="px-4 py-2 text-center font-medium text-gray-700 italic">Vision only</td></tr>
                                <tr><td className="px-4 py-2 text-left">ViT-A</td><td>79.0</td><td>41.1</td><td>55.0</td><td>71.2</td><td>84.3</td></tr>
                                <tr><td className="px-4 py-2 text-left">ViT-B</td><td>83.0</td><td>50.0</td><td>61.4</td><td>77.0</td><td>86.9</td></tr>
                                <tr><td className="px-4 py-2 text-left">ViT-C</td><td>78.4</td><td>31.1</td><td>43.7</td><td>67.2</td><td>82.4</td></tr>
                                <tr><td className="px-4 py-2 text-left">MedVAE</td><td>57.5</td><td>20.6</td><td>23.7</td><td>41.9</td><td>60.1</td></tr>
                                <tr><td className="px-4 py-2 text-left">TReg-SwinT</td><td>85.8</td><td>53.0</td><td>55.1</td><td>80.6</td><td>90.2</td></tr>
                                <tr><td className="px-4 py-2 text-left">XFMamba</td><td>63.6</td><td>18.3</td><td>25.2</td><td>51.5</td><td>64.6</td></tr>

                                <tr className="bg-blue-50/50"><td colSpan={6} className="px-4 py-2 text-center font-medium text-gray-700 italic">Image-Text</td></tr>
                                <tr><td className="px-4 py-2 text-left">MMBCD</td><td>77.1</td><td>27</td><td>50</td><td>66.2</td><td>82.8</td></tr>
                                <tr><td className="px-4 py-2 text-left">M-C-B5</td><td>85.8</td><td>50.8</td><td>65.4</td><td className="font-bold">83.5</td><td>89.9</td></tr>
                                <tr className="bg-gray-50 border-t border-gray-200"><td className="px-4 py-2 text-left font-bold">Ours</td><td className="font-bold">86.6</td><td className="font-bold">54.5</td><td className="font-bold">66.5</td><td>80.7</td><td className="font-bold">90.3</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="mt-4 text-sm text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
                        Table 1: Performance comparison on the VinDR dataset. ViT-A and ViT-B correspond to DINO with a linear layer at input resolutions of 448x448 and 1024x1024 respectively. ViT-C demonstrates scores using a DeIT head instead of a linear layer at 448x448 input resolution.
                    </p>
                </section>

                {/* Citation */}
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Citation</h2>
                    <Card className="bg-gray-50 border-gray-200">
                        <CardContent className="p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-700 font-mono whitespace-pre">{`@inproceedings{sanghvi2026attend,
  title={Attend What Matters: Leveraging Vision Foundational Models for Breast Cancer Classification Using Mammograms},
  author={Sanghvi, Samyak and Miglani, Piyush and Shashikumar, Sarvesh and Borgavi, Kaustubh R and Arora, Chetan},
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
