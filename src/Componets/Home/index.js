import React from "react";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  // FadeIn,
  // Move,
  MoveIn,
  MoveOut,
  Sticky,
  // StickyIn,
  // ZoomIn,
} from "react-scroll-motion";

function About() {
  // const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Sticky());
  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <span style={{ fontSize: "1.5rem" }}>Hello World!🌎👋</span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={1}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -250))}>
          <span style={{ fontSize: "1.5rem" }}>
            My name is Janneth and I am a Full Stack Web Developer ✨
          </span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={2}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <span style={{ fontSize: "1.5rem" }}>
            <ul>
              <b>
                <ol>I AM ...</ol>

                <ol>DEDICATED</ol>

                <ol>SELF MOTIVATED </ol>

                <ol>DETERMINED </ol>

                <ol>HUMBLE</ol>

                <ol>CONSISTENT</ol>

                <ol>HUMBLE</ol>
              </b>
            </ul>
          </span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={4}>
        <Animator animation={FadeUp}>
          <span style={{ fontSize: "1.5rem" }}> </span>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
}

export default About;
