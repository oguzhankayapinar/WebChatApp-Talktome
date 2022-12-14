import React, { useContext } from "react";
//import Cam from "../img/cam.png";
//import Add from "../img/add.png";
//import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useTranslation } from "react-i18next";
import LanguageButton from "./LanguageButton";


const Chat = () => {
  const { data } = useContext(ChatContext);
  const { t } = useTranslation();


  return (
    <div className="chat">
      
      
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
        
        <LanguageButton/>
          <button onClick={()=>signOut(auth)}>
            {t("logout")}
            </button>
            
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;
