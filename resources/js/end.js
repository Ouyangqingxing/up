
/**
 * 全局变量
 * 句子总数，当前句子序号，主题序号
 */
var sentenceNumber = 28;
var currentSentence = -1;

$(document).ready(function()
{
    // 兜底逻辑
    $("#rightLoading").show();
    var defalut = window.setTimeout("hideDefalut()",2000);
    // 定时随机换一个句子
    var sentenceTime = window.setInterval("displaySentence()",2500); 
});

/**
 * 隐藏兜底数据
 */
function hideDefalut()
{
    // 隐藏p0
    $("#rightLoading").hide();
}

/**
 * 随机展示一个句子
 */
function displaySentence()
{
    // 隐藏当前展示的句子
    $("#p" + currentSentence).hide();
    // 获取下一个句子
    var next = currentSentence + 2;
    if(next > sentenceNumber){
        if(next % 2 == 1){
            next = 2;
        }
        else{
            next = 1;
        }
    }
    // 展示这个句子，并修改变量
    $("#p" + next).show();
    currentSentence = next;
}
