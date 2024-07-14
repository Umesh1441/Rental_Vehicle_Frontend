import React, { useEffect } from "react";
import chatbot from "../images/chatbot.png";
import { Widget, addResponseMessage } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";

const Chatwidget = () => {
  // Retrieve user from localStorage or set default username
  var user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    user = {
      username: "sir",
    };
  }

  useEffect(() => {
    // Display initial welcome message using user.username
    addResponseMessage(
      `Welcome ${user.username}, I'm Sneha 🤖🖐️ a bot. How can I help you today?`
    );
  }, [user.username]); // Ensure useEffect runs when user.username changes

  const handleNewUserMessage = (newMessage) => {
    // Handle incoming messages based on keywords
    if (
      newMessage.includes("hi") ||
      newMessage.includes("Hi") ||
      newMessage.includes("hye") ||
      newMessage.includes("Hye") ||
      newMessage.includes("hello") ||
      newMessage.includes("Hello") ||
      newMessage.includes("hey") ||
      newMessage.includes("Hey")
    ) {
      addResponseMessage(`Hello ${user.username}, how can I help you?`);
    } else if (
      newMessage.includes("how are you") ||
      newMessage.includes("How are you")
    ) {
      addResponseMessage(`I'm fine. What about you?`);
    } else if (newMessage.includes("marry") || newMessage.includes("Marry")) {
      addResponseMessage(`Sorry, I'm a bot`);
    } else if (
      newMessage.includes("your name") ||
      newMessage.includes("Your name")
    ) {
      addResponseMessage(`I'm Marvin`);
    } else if (
      newMessage.includes("my name") ||
      newMessage.includes("My name")
    ) {
      addResponseMessage(`You are ${user.username}`);
    } else if (
      newMessage.includes("age") ||
      newMessage.includes("Age") ||
      newMessage.includes("How old are you")
    ) {
      addResponseMessage(`Don't ask it again 😠`);
    } else if (newMessage.includes("kill") || newMessage.includes("Kill")) {
      addResponseMessage(`Please, don't use bad words 🥺`);
    } else if (newMessage.includes("dead") || newMessage.includes("Dead")) {
      addResponseMessage(`Please, don't use bad words 🥺`);
    } else if (
      newMessage.includes("destroy") ||
      newMessage.includes("Destroy")
    ) {
      addResponseMessage(`Please, don't use bad words 🥺`);
    } else if (newMessage.includes("damage") || newMessage.includes("Damage")) {
      addResponseMessage(`Please, don't use bad words 🥺`);
    } else if (
      newMessage.includes("how to use") ||
      newMessage.includes("How to use")
    ) {
      addResponseMessage(
        `Select any timeslot from the calendar and we will provide you information about available vehicles. You can book any of them by clicking the "Book Now" button and paying the invoice. 😄`
      );
    } else if (
      newMessage.includes("address") ||
      newMessage.includes("Address") ||
      newMessage.includes("location") ||
      newMessage.includes("Location")
    ) {
      addResponseMessage(
        `Our address is Shop Number 12, Rehman Plaza, Wahdat Road, Lahore.`
      );
    } else if (
      newMessage.includes("how to book") ||
      newMessage.includes("How to book")
    ) {
      addResponseMessage(
        `Select any timeslot from the calendar and we will provide you information about available vehicles. You can book any of them by clicking the "Book Now" button and paying the invoice.`
      );
    } else if (
      newMessage.includes("how to pay") ||
      newMessage.includes("How to pay")
    ) {
      addResponseMessage(`We accept payments via Stripe only.`);
    } else if (newMessage.includes("free") || newMessage.includes("Free")) {
      addResponseMessage(`The word "free" is unknown to me.`);
    } else if (
      newMessage.includes("discount") ||
      newMessage.includes("Discount")
    ) {
      addResponseMessage(`Only the owner can give discounts.`);
    } else if (
      newMessage.includes("payment") ||
      newMessage.includes("Payment")
    ) {
      addResponseMessage(`I have no rights to talk about this 🥺`);
    } else if (
      newMessage.includes("number") ||
      newMessage.includes("Number") ||
      newMessage.includes("phone") ||
      newMessage.includes("Phone")
    ) {
      addResponseMessage(
        `You can send your number here or directly contact the owner via +923310145083`
      );
    } else if (newMessage.includes("hacker") || newMessage.includes("Hacker")) {
      addResponseMessage(`Hahaha, nice joke 😄`);
    } else if (
      newMessage.includes("haha") ||
      newMessage.includes("hehehe") ||
      newMessage.includes("hahaha")
    ) {
      addResponseMessage(`Hahaha, nice joke 😄`);
    } else if (newMessage.includes("hehe")) {
      addResponseMessage(`Hehehe, nice joke 😄`);
    } else if (newMessage.includes("bye") || newMessage.includes("Bye")) {
      addResponseMessage(`Bye 😄`);
    } else if (newMessage.includes("Who made you?")) {
      addResponseMessage(`Sorry, I don't know`);
    } else if (newMessage.includes("What is your mother's name?")) {
      addResponseMessage(`Sorry, I don't know`);
    } else if (
      newMessage.includes("Are you human") ||
      newMessage.includes("Are you a robot") ||
      newMessage.includes("are you robot") ||
      newMessage.includes("Who are you")
    ) {
      addResponseMessage(`I'm Marvin & I'm a Bot 🤖`);
    } else {
      addResponseMessage(
        `Sorry, I'm currently learning your language. I don't know the answer. Please contact us at +91-8427040139 for assistance.`
      );
    }
  };

  return (
    <div>
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        title="Chat with us!"
        subtitle="We typically reply in a few minutes."
        profileAvatar={chatbot}
        showCloseButton={true} // Optionally, show close button
        emojis={true} // Optionally, enable emojis
      />
    </div>
  );
};

export default Chatwidget;
