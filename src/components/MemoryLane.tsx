import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart } from "lucide-react";

const memories = [
    {
        icon: <Heart className="w-8 h-8 text-accent" />,
        title: "The Beginning",
        text: "From the moment I met you, my world changed forever. It was like a dream. but i never wanted Kalesh - KaleshiAurat 😒"
    },
    {
        icon: <Heart className="w-8 h-8 text-accent" />,
        title: "Our Journey",
        text: "Every laugh, every moment, every shared secret — it's all magic with you. You make the ordinary extraordinary."
    },
    {
        icon: <Heart className="w-8 h-8 text-accent" />,
        title: "To Jurney",
        text: "Here's to a lifetime of adventures together, my love. Happy Birthday Love. 🎂❤️"
    }
];

export function MemoryLane() {
    return (
        <section className="py-12 px-4 relative z-10">
            <h2 className="text-4xl md:text-6xl text-center mb-12 font-headline text-primary-foreground drop-shadow-md">A Few Words From My Heart</h2>
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
                {memories.map((memory, index) => (
                    <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                        <Card className="h-full text-center bg-card/80 backdrop-blur-sm border-2 border-accent/50 shadow-lg hover:shadow-accent/50 transition-shadow duration-300">
                            <CardHeader className="items-center">
                                {memory.icon}
                                <CardTitle className="text-3xl text-primary-foreground font-headline pt-2">{memory.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-2xl text-secondary-foreground leading-relaxed font-headline">{memory.text}</p>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </section>
    )
}
