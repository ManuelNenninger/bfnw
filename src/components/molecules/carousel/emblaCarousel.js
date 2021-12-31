import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "../../atoms/carouselComponents/emblaCarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import CarouselCard from "./cardCarousel";
import AddCardComponent from "../../atoms/carouselComponents/addCardComponent";
import PersonalUserInterests from "../../userData/personalUserInterests";

const EmblaCarousel = (props) => {
  const [viewportRef, embla] = useEmblaCarousel({
     dragFree: true,
     containScroll: "trimSnaps"
   });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  //const [interestsInFocusArray, setInterestsInFocusArray] = useState(["OTLY"]);
  const {interestsInFocusArray, setInterestsInFocusArray} = props

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);


  return (
    <div className="embla">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
        <div className="embla__slide" key={"embla__slide_index_" + "AddCardComponent"}>
          <div className="embla__slide__inner">
            <AddCardComponent
              setInterestsInFocusArray={setInterestsInFocusArray}
            />
          </div>
        </div>
          {interestsInFocusArray.map((tickerForCard, index) => (
            <div className="embla__slide" key={"embla__slide_index_" + index}>
              <div className="embla__slide__inner">
                <CarouselCard
                  tickerForCard={tickerForCard}
                  slideIndex={index}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  );
};

export default EmblaCarousel;
