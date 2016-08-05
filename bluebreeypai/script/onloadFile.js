/**
 * Created by Administrator on 2016-08-04.
 */
//上传文件组件
//假按钮,事件,真按钮,上传值显示区域,正则,提示文字区域,错误样式,正确样式,错误提示,正确提示
function onloadfile(fakeBtn,event,realBtn,displayArea,Reg,tipsArea,cssError,cssValid,error,valid){
    $(fakeBtn).on(event,function(){
        $(realBtn).trigger(event);
    });
    $(realBtn).on("change",function(){
        var FileName=$(realBtn).val().substring(12);
        var FileFormat=FileName.split(".")[1];
        if(!Reg.test(FileFormat)){
            $(tipsArea).css(cssError).html(error);
        }else{
            if($(displayArea).get(0).nodeName==="INPUT"){
                $(displayArea).get(0).value+=FileName+"  ";
            }else{
                $(displayArea).get(0).innerHTML+=FileName+"  ";
            }
            $(tipsArea).css(cssValid).html(valid);
        }
    });
}
