import React from "react";
import "./style.css";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  // FadeIn,
  // Move,
  // MoveIn,
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
            <div>
              <ul>
                <b>
                  <ol>
                    <h1>DEDICATED</h1>
                  </ol>

                  <ol>
                    <h1>SELF MOTIVATED </h1>
                  </ol>

                  <ol>
                    <h1>DETERMINED </h1>
                  </ol>

                  <ol>
                    <h1>HUMBLE</h1>
                  </ol>

                  <ol>
                    <h1>CONSISTENT</h1>
                  </ol>

                  <ol>
                    <h1>HUMBLE</h1>
                  </ol>
                </b>
              </ul>
            </div>
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
