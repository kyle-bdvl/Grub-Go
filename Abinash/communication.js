document.addEventListener("DOMContentLoaded", () => {

    // Chat functionality
    const chatMessages = document.getElementById("chatMessages");
    const chatInput = document.getElementById("chatInput");
    const sendBtn = document.getElementById("sendBtn");
  
    sendBtn.addEventListener("click", () => {
      const messageText = chatInput.value.trim();
      if (messageText) {
        // Display user's message
        const userMessage = document.createElement("div");
        userMessage.textContent = messageText;
        userMessage.style.padding = "10px";
        userMessage.style.margin = "5px 0";
        userMessage.style.background = "#43a047";
        userMessage.style.color = "white";
        userMessage.style.borderRadius = "8px";
        userMessage.style.alignSelf = "flex-end";
        chatMessages.appendChild(userMessage);
  
        // Clear input field
        chatInput.value = "";
  
        // Scroll to the latest message
        chatMessages.scrollTop = chatMessages.scrollHeight;
  
        // Simulate driver's reply
        setTimeout(() => {
          const driverReply = document.createElement("div");
          driverReply.textContent = "Okay, please wait 😊 punde";
          driverReply.style.padding = "10px";
          driverReply.style.margin = "5px 0";
          driverReply.style.background = "#ffffff";
          driverReply.style.border = "1px solid #43a047";
          driverReply.style.color = "#333";
          driverReply.style.borderRadius = "8px";
          driverReply.style.alignSelf = "flex-start";
          chatMessages.appendChild(driverReply);
  
          // Scroll to the latest reply
          chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000); // Simulate a 1-second delay for the reply
      }
    });
  });
  
