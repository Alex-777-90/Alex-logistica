// src/components/VideoPitch.tsx
import styled from "styled-components";

const VideoContainer = styled.div`
  background-color: rgba(5, 86, 153, 0.774);
  border-radius:10px;
  margin: 2rem auto;
  text-align: center;
  padding-top:20px;
  padding-bottom:20px;
`;

const Title = styled.h2`
  color: #fff;
  margin-bottom: 1rem;
`;

const Video = styled.video`
  width: 90%;
  max-width: 800px;
  border-radius: 10px;
`;

export default function VideoPitch() {
  return (
    <VideoContainer>
      <Title>Assista ao meu vídeo pitch</Title>
      <Video controls autoPlay muted loop poster="/image/thumb-pitch.jpg">
        <source src="/logistica_legend.mp4" type="video/mp4" />
        Seu navegador não suporta vídeo.
      </Video>
    </VideoContainer>
  );
}
