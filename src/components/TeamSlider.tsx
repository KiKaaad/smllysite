"use client";

import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { useRef, useState } from "react";

const team = [
    { name: "trashracc00n", role: "CEO, художник", color: "#bf9969", textColor: "#171717", img: "/avatartrashracc00n.gif" },
    { name: "Кикидза", role: "Основатель, дизайнер, разработчик", color: "#F9A8D4", textColor: "#171717", img: "/avatarkikidza.png" },
    { name: "Fist.", role: "Главный билдер", color: "#457297", textColor: "#E0E0E0", img: "/avatarfistan.png" },
    { name: "kefichik", role: "Фембойчик", color: "#D1D5DB", textColor: "#171717", img: "/avatarkefichik.png" },
    { name: "OtStrAmPON ", role: "Модератор", color: "#0a0a0a", textColor: "#FFFFFF", img: "/avatarots.gif" },
    { name: "Loomtik", role: "Гл. Модератор", color: "#222222", textColor: "#FFFFFF", img: "/avatarloomtik.png" },
    { name: "Tigra", role: "Гл. Модератор", color: "#b2a9d9", textColor: "#171717", img: "/avatartigra.png" },
    { name: "__Fastik__", role: "Администратор", color: "#f2b6ba", textColor: "#171717", img: "/avatarfastik.png" },
    { name: "Danyasniper", role: "Билдер", color: "#1c2026", textColor: "#FFFFFF", img: "/avatardanyasniper.png" },
    { name: "B_TryCaX", role: "Модератор", color: "#65b056", textColor: "#171717", img: "/avatarname.png" },
    { name: "He_Space", role: "Билдер", color: "#d9b1a9", textColor: "#171717", img: "/avatarspace.png" },
    { name: "Tvonvan", role: "Тепловизор фургонов", color: "#696969", textColor: "#FFFFFF", img: "/avatarvovan.png" },
];

export default function TeamSlider() {
    const carouselRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    const baseSpeed = 0.5;
    const currentSpeed = useRef(1.5);

    useAnimationFrame(() => {
        if (!carouselRef.current) return;

        const contentWidth = carouselRef.current.scrollWidth / 2;

        if (isDragging) {
            currentSpeed.current = 0;
            if (x.get() <= -contentWidth) x.set(0);
            if (x.get() > 0) x.set(-contentWidth);
            return;
        }

        const targetSpeed = isHovered ? 0 : baseSpeed;
        currentSpeed.current += (targetSpeed - currentSpeed.current) * 0.05;

        let newX = x.get() - currentSpeed.current;

        if (newX <= -contentWidth) {
            newX = 0;
        }
        x.set(newX);
    });

    return (
        <div className="w-full bg-[#050505] py-20 relative overflow-hidden">

            <div
                className="relative z-0"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <motion.div
                    ref={carouselRef}
                    style={{ x }}
                    drag="x"
                    dragConstraints={{ left: -3800, right: 0 }}
                    onDragStart={() => setIsDragging(true)}
                    onDragEnd={() => setIsDragging(false)}
                    className="flex gap-8 items-center justify-start w-max px-10 cursor-grab active:cursor-grabbing"
                >
                    {[...team, ...team].map((member, index) => (
                        <div
                            key={index}
                            style={{ backgroundColor: member.color }}
                            className="min-w-[350px] h-[500px] rounded-[60px] p-10 flex flex-col items-center justify-center shrink-0 select-none"
                        >
                            <div className="w-32 h-32 rounded-full overflow-hidden bg-black/20 mb-8 border-4 border-white/20">
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="w-full h-full object-cover pointer-events-none"
                                />
                            </div>
                            <h3
                                className="text-3xl font-black leading-none mb-4"
                                style={{ color: member.textColor || "#171717" }}
                            >
                                {member.name}
                            </h3>
                            <p
                                className="font-medium text-[20px] text-center max-w-[250px] opacity-90"
                                style={{ color: member.textColor || "#171717" }}
                            >
                                {member.role}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
