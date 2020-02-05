import React from 'react';
import "./Home.less"
import { Row, Col, Carousel } from 'antd';
import { MainLayout, Sider, ProductCollection } from '../components'

import sideImage from '../assets/images/sider_2019_12-09.png';
import sideImage2 from '../assets/images/sider_2019_02-04.png';
import sideImage3 from '../assets/images/sider_2019_02-04-2.png';
import producImage0 from '../assets/images/shanghai-2446326_640.jpg';
import producImage1 from '../assets/images/castle-1736779_640.jpg';
import producImage2 from '../assets/images/louvre-102840_640.jpg';
import producImage3 from '../assets/images/japan-2014618_640.jpg';
import producImage4 from '../assets/images/ocean-829715_640.jpg';
import producImage5 from '../assets/images/osaka-2159435_640.jpg';
import producImage6 from '../assets/images/andromeda-galaxy-755442_640.jpg';
import producImage7 from '../assets/images/milky-way-1023340_640.jpg';
import producImage8 from '../assets/images/paris-843229_640.jpg';
import producImage9 from '../assets/images/osaka-castle-1398116_640.jpg';
import producImage10 from '../assets/images/railroad-tracks-163518_640.jpg';
import producImage11 from '../assets/images/symbol-600334_640.jpg';
import producImage12 from '../assets/images/louvre-102840_640.jpg';

export const Home: React.FC = () => {
  return (
    <MainLayout
      breadcrumbItems={['首页', "旅游", "国内游"]}
    >
      <div className="home-page">

        <Row style={{marginTop: 20}}>
          <Col span={6}>
            <Sider />
          </Col>
          <Col span={18}>
            <Carousel autoplay>
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
            </Carousel>
          </Col>
        </Row>

        <div style={{marginTop: 30}}>
          <ProductCollection 
            title='爆款推荐'
            sideImage={sideImage}
            products={[ 
              {src: producImage1, title: "埃及阿斯旺+卢克索+红海Red Sea+开罗+亚历山大12日跟团游(5钻)·【官方旗舰明星纯玩团】25人封顶|含签证小费全程餐|3晚尼罗河游轮+3晚红海全包度假村+1晚底比斯古都|升级内陆飞机|优质中文导游队伍|七大神庙+赠项目", price: "11990"},
              {src: producImage2, title: "摩洛哥撒哈拉沙漠+卡萨布兰卡+马拉喀什+舍夫沙...", price: "13290"},
              {src: producImage3, title: "越南胡志明市+美奈+芽庄+河内7日6晚跟团游(4钻)...", price: "4000"},
              {src: producImage4, title: "迪拜+阿布扎比6日跟团游(5钻)·【携程国旅纯玩...", price: "7399"},
              {src: producImage5, title: "泰国曼谷+芭堤雅6日5晚跟团游(5钻)·【纯玩】『可...", price: "3499"},
              {src: producImage6, title: "日本大阪+京都+箱根+东京6日5晚跟团游(4钻)·【浪...", price: "5999"},
              {src: producImage7, title: "新加坡+马来西亚6日5晚跟团游(5钻)·【纯玩无购物...", price: "6199"},
              {src: producImage8, title: "法国+德国+意大利+瑞士12日跟团游(4钻)·【匠心定...", price: "13699"},
              {src: producImage9, title: "印度尼西亚巴厘岛7日5晚私家团(5钻)·A线独栋泳...", price: "5021"},
            ]}
          />
        </div>

        <div style={{marginTop: 40}}>
          <ProductCollection 
            title='新品上市'
            sideImage={sideImage2}
            products={[ 
              {src: producImage0, title: "南京3日2晚跟团游(4钻)·观中山陵+游总统府+览博物院『游六朝古都 听漫长历史』&逛秦淮河风光带+老门东『品美食 唤醒您的舌尖』&牛首山+报恩寺『诚心祈福 放空心灵』& 2晚连住4钻酒店", price: "11990"},
              {src: producImage9, title: "摩洛哥撒哈拉沙漠+卡萨布兰卡+马拉喀什+舍夫沙...", price: "13290"},
              {src: producImage8, title: "越南胡志明市+美奈+芽庄+河内7日6晚跟团游(4钻)...", price: "4000"},
              {src: producImage7, title: "迪拜+阿布扎比6日跟团游(5钻)·【携程国旅纯玩...", price: "7399"},
              {src: producImage6, title: "泰国曼谷+芭堤雅6日5晚跟团游(5钻)·【纯玩】『可...", price: "3499"},
              {src: producImage5, title: "日本大阪+京都+箱根+东京6日5晚跟团游(4钻)·【浪...", price: "5999"},
              {src: producImage4, title: "新加坡+马来西亚6日5晚跟团游(5钻)·【纯玩无购物...", price: "6199"},
              {src: producImage3, title: "法国+德国+意大利+瑞士12日跟团游(4钻)·【匠心定...", price: "13699"},
              {src: producImage2, title: "印度尼西亚巴厘岛7日5晚私家团(5钻)·A线独栋泳...", price: "5021"},
            ]}
          />
        </div>

        <div style={{marginTop: 40}}>
          <ProductCollection 
            title='国内游推荐'
            sideImage={sideImage3}
            products={[ 
              {src: producImage12, title: "埃及阿斯旺+卢克索+红海Red Sea+开罗+亚历山大12日跟团游(5钻)·【官方旗舰明星纯玩团】25人封顶|含签证小费全程餐|3晚尼罗...", price: "11990"},
              {src: producImage1, title: "摩洛哥撒哈拉沙漠+卡萨布兰卡+马拉喀什+舍夫沙...", price: "13290"},
              {src: producImage3, title: "越南胡志明市+美奈+芽庄+河内7日6晚跟团游(4钻)...", price: "4000"},
              {src: producImage4, title: "迪拜+阿布扎比6日跟团游(5钻)·【携程国旅纯玩...", price: "7399"},
              {src: producImage5, title: "泰国曼谷+芭堤雅6日5晚跟团游(5钻)·【纯玩】『可...", price: "3499"},
              {src: producImage6, title: "日本大阪+京都+箱根+东京6日5晚跟团游(4钻)·【浪...", price: "5999"},
              {src: producImage7, title: "新加坡+马来西亚6日5晚跟团游(5钻)·【纯玩无购物...", price: "6199"},
              {src: producImage8, title: "法国+德国+意大利+瑞士12日跟团游(4钻)·【匠心定...", price: "13699"},
              {src: producImage9, title: "印度尼西亚巴厘岛7日5晚私家团(5钻)·A线独栋泳...", price: "5021"},
            ]}
          />
        </div>

        <div>
          合作企业
        </div>
     </div>
    </MainLayout>
  )
}
