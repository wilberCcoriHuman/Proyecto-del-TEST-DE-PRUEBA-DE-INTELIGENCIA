alertify
    .alert("This is an alert dialog.", function(){
        alertify.message('OK');
    });
/*
if(!alertify.myAlert){
    //define a new dialog
    alertify.dialog('myAlert',function(){
        return{
            main:function(message){
                this.message = message;
            },
            setup:function(){
                return {
                    buttons:[{text: "cool!", key:27/!*Esc*!/}],
                    focus: { element:0 }
                };
            },
            prepare:function(){
                this.setContent(this.message);
            }
        }});
}
//launch it.
alertify.myAlert("Browser dialogs made easy!");*/
