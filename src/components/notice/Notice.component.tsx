import {
  NoticeContainer,
  Title,
  Content,
  NoticeButton,
  NoticeText,
} from "./Notice.styles";

export default function Notice() {
  return (
    <NoticeContainer>
      <Title>Investing Safety</Title>
      <Content>
        It's very difficult to time investment, especially when the market is
        volatile. Learn how to use dollar cost averaging to your advantage.
      </Content>
      <NoticeButton>
        <NoticeText>Learn More</NoticeText>
      </NoticeButton>
    </NoticeContainer>
  );
}
