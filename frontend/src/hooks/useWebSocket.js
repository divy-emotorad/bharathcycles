// useWebSocket.js
import { useEffect, useRef } from "react";

const useWebSocket = (url, token, onMessage) => {
  const wsRef = useRef(null);

  useEffect(() => {
    wsRef.current = new WebSocket(`${url}/${token}`);

    wsRef.current.onopen = () => {
      console.log("WebSocket connection opened");
    };

    wsRef.current.onmessage = (event) => {
      if (onMessage) {
        onMessage(JSON.parse(event.data));
      }
    };

    wsRef.current.onclose = () => {
      console.log("WebSocket connection closed");
    };

    wsRef.current.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    return () => {
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, [url, token, onMessage]);

  const sendRequest = (request) => {
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify(request));
    } else {
      console.error("WebSocket is not open");
    }
  };

  return sendRequest;
};

export default useWebSocket;
