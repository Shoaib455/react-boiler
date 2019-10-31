import React from 'react'

export default () =>{
    return(
        <style js="true">{`
        
        .three-colomuns
        {       
                height:40vh;
                background-color: #2a2a3f;
        }
        .three-columns-btn{
            background-color: #f17a28 !important;
            border-color:  #f17a28 !important;
            color: white!important;
        }
        .three-columns-btn button{
        border-color:  #f17a28 !important;
        }
        .three-columns-btn-se
        {
            background-color: #788c96 !important;
        }
        .left-part{
            width: 500px;
            color: white;
            filter: opacity(80%);
        }
        .left-part p{
            width:500px;
            text-align:left;
            margin-top:10px;
        }
        .right-part p{
            width:350px;
            text-align:left;
        }
        .middle-part h6{
        color: white;	
        filter: opacity(80%);
        }
        .middle-part ul{
            list-style: none;	
            color: white;
            filter: opacity(80%);
        }
        .right-part{
            color: white;
            filter: opacity(80%);
        }


        `}     
        </style>
    );
}