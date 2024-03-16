"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Home() {
  return (
    <div className=" text-lg px-5  md:px-16 py-8  space-y-5">
      <h2 className="text-4xl font-semibold ">Welcome to our blog website</h2>

      <p>
        In the symphony of existence, each of us carries a unique melody, a tale
        interwoven with experiences, dreams, and aspirations. Welcome to my
        corner of the digital realm, where pixels breathe life into narratives,
        and words paint the canvas of my soul. Born of ink and imagination, I am
        a wordsmith, a weaver of stories, and a seeker of truths. <br /> <br />{" "}
        My journey traverses the landscapes of curiosity, where every bend in
        the road unveils new vistas of knowledge and wonder. From the
        cobblestone streets of literary classics to the bustling avenues of
        technological innovation, my interests are as diverse as the hues of a
        sunset. I am drawn to the intricacies of language, the rhythms of
        poetry, and the untold mysteries of the cosmos. <br /> <br />
        With each keystroke, I strive to encapsulate the essence of human
        experience, to bridge the chasm between hearts and minds. Through my
        words, I seek to inspire, to provoke thought, and to spark the flames of
        imagination in the souls of those who wander through the corridors of
        cyberspace.
      </p>
    </div>
  );
}
