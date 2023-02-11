import GalleryCard from "../components/GalleryCard";
import styled from "@emotion/styled";

const Gallery = () => {
  return (
    <>
      <CardContainer>
        <GalleryCard type={"spring"} />
        <GalleryCard type={"summer"} />
        <GalleryCard type={"autumn"} />
        <GalleryCard type={"winter"} />
      </CardContainer>
    </>
  );
};

export default Gallery;

const CardContainer = styled.div`
  display: flex;
  gap: 20px;
`;
