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
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -100))}>
          <span style={{ fontSize: "1.5rem" }}>
            My name is Janneth and I am a Full Stack Web Developer ✨
          </span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={2}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -100))}>
          <div className="description-list">
            <ul>
              <b>
                <ol>
                  <h1>PROBLEM SOLVER</h1>
                </ol>
                <ol>
                  <h1>ATTENTION TO DETAIL</h1>
                </ol>
                <ol>
                  <h1>DRIVEN</h1>
                </ol>
                <ol>
                  <h1>CREATIVE</h1>
                </ol>
                <ol>
                  <h1>PROACTIVE</h1>
                </ol>
              </b>
            </ul>
          </div>
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
