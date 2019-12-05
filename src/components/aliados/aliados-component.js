import React from "react";
import Slider from "react-slick";
class SimpleSlider extends React.Component {
  render() {
    
    return (
      <div id="jssor_1" style="position:relative;margin:0 auto;top:0px;left:0px;width:1300px;height:520px;overflow:hidden;visibility:hidden;">
        <div data-u="loading" class="jssorl-004-double-tail-spin" style="position:absolute;top:0px;left:0px;width:100%;height:100%;text-align:center;background-color:rgba(0,0,0,0.7);">
            <img style="margin-top:-19px;position:relative;top:50%;width:38px;height:38px;" src="../../assets/images/aliados/img/double-tail-spin.svg" />
        </div>
        <div data-u="slides" style="cursor:default;position:relative;top:0px;left:0px;width:1300px;height:520px;overflow:hidden;">
            <div>
                <img data-to="50% 50%" data-t="0" style="left:-360px;top:28px;width:316px;height:237px;position:absolute;max-width:316px;" src="../../assets/images/aliados/aliado-1.png" />
                <img data-to="50% 50%" data-t="1" style="left:-320px;top:16px;width:316px;height:237px;position:absolute;max-width:316px;" src="../../assets/images/aliados/aliado-2.png" />
                <img data-to="50% 50%" data-t="2" style="left:-380px;top:35px;width:316px;height:237px;position:absolute;max-width:316px;" src="../../assets/images/aliados/aliado-3.png" />
                <img data-to="50% 50%" data-t="3" style="left:-400px;top:252px;width:316px;height:237px;position:absolute;max-width:316px;" src="../../assets/images/aliados/aliado-4.png" />
                <img data-to="50% 50%" data-t="4" style="left:-328px;top:272px;width:316px;height:237px;position:absolute;max-width:316px;" src="../../assets/images/aliados/aliado-5.png" />
                <img data-to="50% 50%" data-t="5" style="left:-380px;top:244px;width:316px;height:237px;position:absolute;max-width:316px;" src="../../assets/images/aliados/aliado-6.png" />
            </div>
            <div>
                <img data-to="50% 50%" data-t="6" style="left:-360px;top:70px;width:316px;height:237px;position:absolute;max-width:316px;" src="../../assets/images/aliados/aliado-1.png" />
                <img data-to="50% 50%" data-t="7" style="left:-320px;top:58px;width:316px;height:237px;position:absolute;max-width:316px;" src="../../assets/images/aliados/aliado-2.png" />
                <img data-to="50% 50%" data-t="8" style="left:-380px;top:77px;width:316px;height:237px;position:absolute;max-width:316px;" src="../../assets/images/aliados/aliado-3.png" />
                <img data-to="50% 50%" data-t="9" style="left:-400px;top:315px;width:316px;height:237px;position:absolute;max-width:316px;" src="../../assets/images/aliados/aliado-4.png" />
                <img data-to="50% 50%" data-t="10" style="left:-320px;top:314px;width:316px;height:237px;position:absolute;max-width:316px;" src="../../assets/images/aliados/aliado-5.png" />
                <img data-to="50% 50%" data-t="11" style="left:-380px;top:286px;width:316px;height:237px;position:absolute;max-width:316px;" src="../../assets/images/aliados/aliado-6.png" />
            </div>
        </div>
        <div data-u="navigator" class="jssorb031" style="position:absolute;bottom:12px;right:12px;" data-autocenter="1" data-scale="0.5" data-scale-bottom="0.75">
            <div data-u="prototype" class="i" style="width:16px;height:16px;">
                <svg viewbox="0 0 16000 16000" style="position:absolute;top:0;left:0;width:100%;height:100%;">
                    <circle class="b" cx="8000" cy="8000" r="5800"></circle>
                </svg>
            </div>
        </div>
        <div data-u="arrowleft" class="jssora072" style="width:25px;height:25px;top:0px;left:30px;" data-autocenter="2" data-scale="0.75" data-scale-left="0.75">
            <svg viewbox="0 0 16000 16000" style="position:absolute;top:0;left:0;width:100%;height:100%;">
                <path class="a" d="M4800,8000c0,192.6,70.4,359.3,211.1,500l4977.8,4977.8c140.7,140.7,307.4,211.1,500,211.1 c192.6,0,359.3-70.4,500-211.1c140.7-140.7,211.1-307.4,211.1-500V3022.2c0-192.6-70.4-359.2-211.1-500 c-140.7-140.8-307.4-211.1-500-211.1c-192.6,0-359.3,70.3-500,211.1L5011.1,7500C4870.4,7640.7,4800,7807.4,4800,8000L4800,8000z"></path>
            </svg>
        </div>
        <div data-u="arrowright" class="jssora072" style="width:25px;height:25px;top:0px;right:30px;" data-autocenter="2" data-scale="0.75" data-scale-right="0.75">
            <svg viewbox="0 0 16000 16000" style="position:absolute;top:0;left:0;width:100%;height:100%;">
                <path class="a" d="M11200,8000c0,192.6-70.4,359.3-211.1,500l-4977.8,4977.8c-140.7,140.7-307.4,211.1-500,211.1 s-359.3-70.4-500-211.1c-140.7-140.7-211.1-307.4-211.1-500V3022.2c0-192.6,70.4-359.2,211.1-500c140.7-140.8,307.4-211.1,500-211.1 s359.3,70.3,500,211.1L10988.9,7500C11129.6,7640.7,11200,7807.4,11200,8000L11200,8000z"></path>
            </svg>
        </div>
    </div>
    );
  }
}
export default SimpleSlider;
