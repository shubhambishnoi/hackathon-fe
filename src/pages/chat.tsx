import { Session, Chatbox } from "@talkjs/react";

export default function Chat() {
  return (
    <Session appId="tlIpadcd" userId="sample_user_alice">
      <Chatbox conversationId="sample_conversation" />
    </Session>
  );
}
