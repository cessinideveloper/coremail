import React from 'react';
import './sendpage.css';
import MailTemplate from './mailTemplates';
import {connect} from 'react-redux';


function SendPage({templates,loadTheTemplate,handelDic}) {
    const activeDic = () =>{
      handelDic({activeSend:false, activeMail:true})
    }
    
    const temps = () =>  {
        if(templates.length === 0){
            return <div className="templateHolder">Empty. Please Create templates</div>
        }else 
          return templates.map(templa=> <MailTemplate handelDict={activeDic} loadTheTemplate={loadTheTemplate} key={templa.key} name={templa.name} data={templa.data}></MailTemplate>)
      }
    return (
      <div className="sendpage">
          <div className="templateWrapper">
            {temps()}
          </div>  
      </div>
    );
  }

const mapStateToProps = (state) =>{
  return state
}

export default connect(mapStateToProps)(SendPage);