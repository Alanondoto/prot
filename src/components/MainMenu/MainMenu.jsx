import style from './MainMenu.module.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const MainMenu = (props) => {
    return(
        <div className={style.menuWrapper}>
            <div className={style.menuBg}>
                <div className={style.miniMenuBg}>
                    <div className={style.firstWrapper}>
                        <div className={style.menuTitle}>Кол-во предметов</div>
                        <div className={style.sliderWrapper1}>
                            <Slider trackStyle={{ backgroundColor: '#FFD748', height: 21, marginTop: -9, borderRadius: 25 }}
                            railStyle={{ backgroundColor: '#FFD748', height: 21, marginTop: -9, borderRadius: 25 }}
                            dotStyle={{ display: 'none' }}
                            activeDotStyle={{ display: 'none' }}
                            marksStyle={{ fontSize: 1000}}
                            handleStyle={{
                                borderColor: '#104987',
                                opacity: 1.0,
                                height: 23,
                                width: 23,
                                marginTop: -10,
                                backgroundColor: '#104987',
                            }}
                            min={2} max={5} defaultValue={2} marks={{ 2: {style: {marginTop: -50, fontSize: 24, fontWeight: 700, color: '#4F4B61'}, label: 2},
                                                                    3: {style: {marginTop: -50, fontSize: 24, fontWeight: 700, color: '#4F4B61'}, label: 3},
                                                                    4: {style: {marginTop: -50, fontSize: 24, fontWeight: 700, color: '#4F4B61'}, label: 4},
                                                                    5: {style: {marginTop: -50, fontSize: 24, fontWeight: 700, color: '#4F4B61'}, label: 5} }} step={null} />  
                        </div>
                    </div>
                    <div className={style.secondtWrapper}>
                        <div className={style.menuTitle}>Значения</div>
                        <div className={style.sliderWrapper1}>
                            <Slider trackStyle={{ backgroundColor: '#FFD748', height: 21, marginTop: -9, borderRadius: 25 }}
                            railStyle={{ backgroundColor: '#FFD748', height: 21, marginTop: -9, borderRadius: 25 }}
                            dotStyle={{ display: 'none' }}
                            activeDotStyle={{ display: 'none' }}
                            marksStyle={{ fontSize: 1000}}
                            handleStyle={{
                                borderColor: '#104987',
                                opacity: 1.0,
                                height: 23,
                                width: 23,
                                marginTop: -10,
                                backgroundColor: '#104987',
                            }}
                            min={0} max={5} defaultValue={0} marks={{ 0: {style: {marginTop: -50, fontSize: 24, fontWeight: 700, color: '#4F4B61'}, label: 'А'},
                                                                    1: {style: {marginTop: -50, fontSize: 24, fontWeight: 700, color: '#4F4B61'}, label: 9},
                                                                    2: {style: {marginTop: -50, fontSize: 24, fontWeight: 700, color: '#4F4B61'}, label: 19},
                                                                    3: {style: {marginTop: -50, fontSize: 24, fontWeight: 700, color: '#4F4B61'}, label: 50},
                                                                    4: {style: {marginTop: -50, fontSize: 24, fontWeight: 700, color: '#4F4B61'}, label: 99},
                                                                    5: {style: {marginTop: -50, fontSize: 24, fontWeight: 700, color: '#4F4B61'}, label: 999} }} step={null} />  
                        </div>
                    </div>
                    <div className={style.btnWrapper}>
                        <div className={style.btn}>
                            <div>По возрастанию</div>
                        </div>
                        <div className={style.btn2}>
                            <div>По убыванию</div>
                        </div>
                    </div>
                    <div className={style.playBtn}>
                        <div>Играть</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// test 2
export default MainMenu