
/**
 * 全局变量
 * 句子总数，当前句子序号，主题序号
 */
var sentenceNumber = 20;
var currentSentence = 1;

$(document).ready(function()
{
    // 兜底逻辑
    $("#rightLoading").show();
    var defalut = window.setTimeout("hideDefalut()",3000);
    // 定时随机换一个句子
    var sentenceTime = window.setInterval("displaySentence()",3200); 
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
    // 获取一个随机数
    var random = Math.floor(Math.random() * (20) + 1);
    // 展示这个句子，并修改变量
    $("#p" + random).show();
    currentSentence = random;
}
