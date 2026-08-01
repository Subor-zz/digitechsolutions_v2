"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// The reader sets the pace. A 2/3 time scale makes every entrance 50% longer.
const MOTION_TIME_SCALE = 2 / 3;
const STORY_SCRUB_SMOOTHING = 1.1;

export function NarrativeMotion() {
  useGSAP(() => {
    const media = gsap.matchMedia();

    media.add(
      {
        motionAllowed: "(prefers-reduced-motion: no-preference)",
        desktop: "(min-width: 768px)",
        storyDesktop: "(min-width: 1024px)",
      },
      (context) => {
        if (!context.conditions?.motionAllowed) return;

        const desktop = Boolean(context.conditions?.desktop);
        const storyDesktop = Boolean(context.conditions?.storyDesktop);
        const timelines: gsap.core.Timeline[] = [];

        const heroTargets = gsap.utils.toArray<HTMLElement>(".hero__copy > *");
        const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });
        heroTimeline.from(heroTargets, {
          autoAlpha: 0,
          y: 20,
          duration: 0.52,
          stagger: 0.075,
          clearProps: "transform,opacity,visibility",
        });
        timelines.push(heroTimeline.timeScale(MOTION_TIME_SCALE));

        const journey = document.querySelector<HTMLElement>(".site-journey");
        const journeyMain = journey?.querySelector<SVGPathElement>(
          ".journey-route__path--main",
        );
        const journeyBranches = journey
          ? Array.from(
              journey.querySelectorAll<SVGPathElement>(
                ".journey-route__path--draw.journey-route__path--branch",
              ),
            )
          : [];
        const journeyGates = journey
          ? Array.from(journey.querySelectorAll<HTMLElement>(".journey-route__gate"))
          : [];

        if (journey && journeyMain && journeyGates.length > 0) {
          [journeyMain, ...journeyBranches].forEach((path) => {
            const length = path.getTotalLength();
            gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
          });
          gsap.set(journeyGates, { autoAlpha: 0.22, scale: 0.62 });

          const journeyTimeline = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: journey,
              start: "top top",
              end: "bottom bottom",
              scrub: STORY_SCRUB_SMOOTHING,
              invalidateOnRefresh: true,
            },
          });

          journeyTimeline.to(journeyMain, { strokeDashoffset: 0, duration: 1 }, 0);

          const branchMoments = [0.14, 0.34, 0.58, 0.82];
          journeyBranches.forEach((path, index) => {
            journeyTimeline.to(
              path,
              { strokeDashoffset: 0, duration: 0.12 },
              branchMoments[index] ?? 0.5,
            );
          });

          const gateMoments = [0.03, 0.18, 0.36, 0.53, 0.67, 0.82, 0.95];
          journeyGates.forEach((gate, index) => {
            journeyTimeline.to(
              gate,
              { autoAlpha: 1, scale: 1, duration: 0.04, ease: "power2.out" },
              gateMoments[index] ?? 0.5,
            );
          });

          timelines.push(journeyTimeline);
        }

        const story = document.querySelector<HTMLElement>(".story-spike");
        if (storyDesktop && story) {
          const problem = document.querySelector<HTMLElement>("#probleem");
          const heroLayout = document.querySelector<HTMLElement>(".hero__layout");
          const problemTargets = gsap.utils.toArray<HTMLElement>(
            ".problem-intro, .flow-diagram-stage",
          );

          if (problem && heroLayout && problemTargets.length > 0) {
            const handoffTimeline = gsap.timeline({
              defaults: { ease: "none" },
              scrollTrigger: {
                trigger: problem,
                start: "top 96%",
                end: "top 12%",
                scrub: STORY_SCRUB_SMOOTHING,
                invalidateOnRefresh: true,
              },
            });

            handoffTimeline
              .to(
                heroLayout,
                {
                  autoAlpha: 0.36,
                  y: -54,
                  scale: 0.975,
                  transformOrigin: "center top",
                  duration: 1,
                },
                0,
              )
              .fromTo(
                problemTargets,
                { autoAlpha: 0.72, y: 42 },
                { autoAlpha: 1, y: 0, duration: 0.76 },
                0.16,
              );

            timelines.push(handoffTimeline);
          }
        }

        const diagnosisLayout = document.querySelector<HTMLElement>(".diagnosis__layout");
        const diagnosisLayers = gsap.utils.toArray<HTMLElement>(".diagnosis__layers details");
        const diagnosisNote = document.querySelector<HTMLElement>(".diagnosis__route-note");

        if (diagnosisLayout && diagnosisLayers.length > 0 && diagnosisNote) {
          if (storyDesktop) {
            gsap.set(diagnosisLayers, { autoAlpha: 0.42, x: 22 });
            gsap.set(diagnosisNote, { autoAlpha: 0.38, y: 30 });

            const diagnosisTimeline = gsap.timeline({
              defaults: { ease: "none" },
              scrollTrigger: {
                trigger: diagnosisLayout,
                start: "top 78%",
                end: "bottom 42%",
                scrub: STORY_SCRUB_SMOOTHING,
                invalidateOnRefresh: true,
              },
            });

            diagnosisTimeline
              .to(diagnosisLayers, {
                autoAlpha: 1,
                x: 0,
                duration: 0.55,
                stagger: 0.085,
              })
              .to(diagnosisNote, { autoAlpha: 1, y: 0, duration: 0.35 }, 0.48);

            timelines.push(diagnosisTimeline);
          } else {
            const diagnosisTimeline = gsap.timeline({
              scrollTrigger: {
                trigger: diagnosisLayout,
                start: "top 82%",
                once: true,
              },
            });

            diagnosisTimeline.from([...diagnosisLayers, diagnosisNote], {
              autoAlpha: 0,
              y: 14,
              duration: 0.48,
              stagger: 0.07,
              ease: "power3.out",
              clearProps: "transform,opacity,visibility",
            });

            timelines.push(diagnosisTimeline.timeScale(MOTION_TIME_SCALE));
          }
        }

        const method = document.querySelector<HTMLElement>(".method-stack");
        const methodIntro = gsap.utils.toArray<HTMLElement>(".method-stack__intro > *");
        const methodLine = document.querySelector<HTMLElement>(".method-route__line");
        const methodNodes = gsap.utils.toArray<HTMLElement>(".method-route i");
        const methodPhases = gsap.utils.toArray<HTMLElement>(".method-phase");
        const methodSteps = gsap.utils.toArray<HTMLElement>(".method-phase__steps li");

        if (method && methodLine && methodPhases.length > 0) {
          const methodTimeline = gsap.timeline({
            scrollTrigger: { trigger: method, start: "top 76%", once: true },
          });

          methodTimeline
            .from(methodIntro, {
              autoAlpha: 0,
              y: 24,
              duration: 0.56,
              stagger: 0.1,
              ease: "power3.out",
              clearProps: "transform,opacity,visibility",
            })
            .from(
              methodLine,
              {
                scaleX: 0,
                transformOrigin: "left",
                duration: 0.8,
                ease: "power2.inOut",
                clearProps: "transform",
              },
              "-=0.1",
            )
            .from(
              methodNodes,
              {
                autoAlpha: 0,
                scale: 0.35,
                duration: 0.3,
                stagger: 0.1,
                ease: "back.out(2)",
                clearProps: "transform,opacity,visibility",
              },
              "-=0.55",
            )
            .from(
              methodPhases,
              {
                autoAlpha: 0,
                y: 34,
                duration: 0.62,
                stagger: 0.14,
                ease: "power3.out",
                clearProps: "transform,opacity,visibility",
              },
              "-=0.26",
            )
            .from(
              methodSteps,
              {
                autoAlpha: 0,
                x: -10,
                duration: 0.34,
                stagger: 0.07,
                ease: "power2.out",
                clearProps: "transform,opacity,visibility",
              },
              "-=0.46",
            );

          timelines.push(methodTimeline.timeScale(MOTION_TIME_SCALE));
        }

        const routePanels = gsap.utils.toArray<HTMLElement>(".route-panel");
        const combinedRoute = document.querySelector<HTMLElement>(".combined-route");
        const routesSection = document.querySelector<HTMLElement>(".routes");
        const routesGrid = document.querySelector<HTMLElement>(".routes__grid");
        const routesHeading = gsap.utils.toArray<HTMLElement>(".routes__heading > *");
        const routePanelLines = gsap.utils.toArray<HTMLElement>(".route-panel__topline i");
        const routePanelContent = gsap.utils.toArray<HTMLElement>(
          ".route-panel h3, .route-panel li, .route-panel__output, .route-panel .text-link",
        );
        if (routesSection && routesGrid && routePanels.length > 0) {
          const routeTimeline = gsap.timeline({
            scrollTrigger: { trigger: routesSection, start: "top 72%", once: true },
          });
          routeTimeline
            .from(routesHeading, {
              autoAlpha: 0,
              y: 24,
              duration: 0.54,
              stagger: 0.09,
              ease: "power3.out",
              clearProps: "transform,opacity,visibility",
            })
            .from(routePanels, {
              autoAlpha: 0,
              x: desktop ? (index: number) => (index === 0 ? -42 : 42) : 0,
              y: desktop ? 0 : 22,
              duration: 0.7,
              stagger: 0.12,
              ease: "power3.out",
              clearProps: "transform,opacity,visibility",
            }, "-=0.18")
            .from(
              routePanelLines,
              {
                scaleX: 0,
                transformOrigin: "left",
                duration: 0.48,
                stagger: 0.12,
                ease: "power2.out",
                clearProps: "transform",
              },
              "-=0.4",
            )
            .from(
              routePanelContent,
              {
                autoAlpha: 0,
                y: 16,
                duration: 0.4,
                stagger: 0.045,
                ease: "power2.out",
                clearProps: "transform,opacity,visibility",
              },
              "-=0.36",
            )
            .from(
              combinedRoute,
              {
                autoAlpha: 0,
                y: 28,
                duration: 0.52,
                ease: "power3.out",
                clearProps: "transform,opacity,visibility",
              },
              "-=0.08",
            );
          timelines.push(routeTimeline.timeScale(MOTION_TIME_SCALE));
        }

        const founder = document.querySelector<HTMLElement>(".founder__layout");
        const founderIdentity = founder?.querySelector<HTMLElement>(".founder__identity");
        if (founder && founderIdentity) {
          const initials = founderIdentity.querySelectorAll<HTMLElement>("span");
          const corner = founderIdentity.querySelector<HTMLElement>("i");
          const founderRoutePaths = Array.from(
            founderIdentity.querySelectorAll<SVGPathElement>(".founder__route path"),
          );
          const founderRouteNodes = Array.from(
            founderIdentity.querySelectorAll<SVGCircleElement>(".founder__route circle"),
          );
          const founderCopy = Array.from(
            founder.querySelectorAll<HTMLElement>(".founder__copy > *"),
          );

          founderRoutePaths.forEach((path) => {
            const length = path.getTotalLength();
            gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
          });
          gsap.set(founderRouteNodes, { autoAlpha: 0, scale: 0, transformOrigin: "center" });

          const founderTimeline = gsap.timeline({
            scrollTrigger: { trigger: founder, start: "top 78%", once: true },
          });
          founderTimeline
            .from(founderIdentity, {
              autoAlpha: 0,
              y: 34,
              scale: 0.975,
              duration: 0.68,
              ease: "power3.out",
              clearProps: "transform,opacity,visibility",
            })
            .to(
              founderRoutePaths,
              {
                strokeDashoffset: 0,
                duration: 0.9,
                stagger: 0.16,
                ease: "power2.inOut",
              },
              "-=0.36",
            )
            .to(
              founderRouteNodes,
              {
                autoAlpha: 1,
                scale: 1,
                duration: 0.3,
                stagger: 0.12,
                ease: "back.out(2)",
              },
              "-=0.32",
            )
            .from(initials, {
              autoAlpha: 0,
              x: (index: number) => (desktop ? (index === 0 ? -40 : 40) : 0),
              y: desktop ? 0 : 18,
              duration: 0.7,
              stagger: 0.08,
              ease: "power3.out",
              clearProps: "transform,opacity,visibility",
            })
            .from(
              corner,
              {
                autoAlpha: 0,
                scale: 0.45,
                transformOrigin: "top right",
                duration: 0.38,
                ease: "power2.out",
                clearProps: "transform,opacity,visibility",
              },
              "-=0.28",
            )
            .from(
              founderCopy,
              {
                autoAlpha: 0,
                y: 22,
                duration: 0.48,
                stagger: 0.085,
                ease: "power3.out",
                clearProps: "transform,opacity,visibility",
              },
              "-=0.42",
            );
          timelines.push(founderTimeline.timeScale(MOTION_TIME_SCALE));
        }

        const roadmap = document.querySelector<HTMLElement>(".scan-roadmap");
        if (roadmap) {
          const scanSection = document.querySelector<HTMLElement>(".scan");
          const scanCopy = gsap.utils.toArray<HTMLElement>(".scan__copy > *");
          const roadmapCards = Array.from(roadmap.querySelectorAll<HTMLElement>(":scope > div"));
          const roadmapLinks = Array.from(roadmap.querySelectorAll<HTMLElement>(":scope > i"));
          const roadmapTimeline = gsap.timeline({
            scrollTrigger: { trigger: scanSection ?? roadmap, start: "top 72%", once: true },
          });
          roadmapTimeline
            .from(scanCopy, {
              autoAlpha: 0,
              x: desktop ? -34 : 0,
              y: desktop ? 0 : 20,
              duration: 0.58,
              stagger: 0.1,
              ease: "power3.out",
              clearProps: "transform,opacity,visibility",
            })
            .from(
              roadmap,
              {
                autoAlpha: 0,
                x: desktop ? 34 : 0,
                y: desktop ? 0 : 22,
                duration: 0.62,
                ease: "power3.out",
                clearProps: "transform,opacity,visibility",
              },
              "-=0.42",
            )
            .from(
              roadmapCards,
              {
                autoAlpha: 0,
                y: 16,
                duration: 0.42,
                stagger: 0.16,
                ease: "power2.out",
                clearProps: "transform,opacity,visibility",
              },
              "-=0.3",
            )
            .from(
              roadmapLinks,
              {
                scaleY: 0,
                transformOrigin: "top",
                duration: 0.34,
                stagger: 0.16,
                ease: "power2.inOut",
                clearProps: "transform",
              },
              "-=0.48",
            );
          timelines.push(roadmapTimeline.timeScale(MOTION_TIME_SCALE));
        }

        return () =>
          timelines.forEach((timeline) => {
            timeline.scrollTrigger?.kill();
            timeline.kill();
          });
      },
    );

    return () => media.revert();
  }, []);

  return null;
}
