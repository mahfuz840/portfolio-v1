import '../css/Skills.css'
import java from '../asset/image/java.png'
import springBoot from '../asset/image/spring-boot.png'
import react from '../asset/image/react.png'
import microservice from '../asset/image/microservice.png'
import docker from '../asset/image/docker.png'
import kubernetes from '../asset/image/kubernetes.png'
import oracle from '../asset/image/oracle.png'
import rabbitmq from '../asset/image/rabbitmq.png'
import kafka from '../asset/image/kafka.png'
import prometheus from '../asset/image/prometheus.png'
import graphana from '../asset/image/graphana.png'
import zipkin from '../asset/image/zipkin.png'
import python from '../asset/image/python.png'

import SkillItem from '../component/SkillItem';

const Skills = (fullpageState) => {
    const fpDirection = fullpageState.fullpageState.direction;

    return (
        <div className="section skills">
            <div className='container'>
                <div className='row align-items-center'>
                    <div className="col col-12 text-center">
                        <p className='skill-quote'>A PROBLEM IS A CHANCE FOR YOU TO DO YOUR BEST</p>
                        <h1 className="heading-skills">
                            <div>
                                <span>S</span>
                                <span>k</span>
                                <span>i</span>
                                <span>l</span>
                                <span>l</span>
                                <span>s</span>
                                <span>&nbsp;</span>
                                <span>&</span>
                                <span>&nbsp;</span>
                                <span>E</span>
                                <span>x</span>
                                <span>p</span>
                                <span>e</span>
                                <span>r</span>
                                <span>i</span>
                                <span>e</span>
                                <span>n</span>
                                <span>c</span>
                                <span>e</span>
                            </div>
                        </h1>
                        <p>The main area of expertise is backend development, system design and DevOps.</p>
                        <p className='skill-desc'>Building medium and large web applications with Java and ReactJS while maintaining the scalability and robustness to support millions of data and users. </p>
                        <p>Please visit my <a className='linkedin' href='#'>Linkedin</a> for more details</p>

                        <div className='row justify-content-center align-items-center'>
                            <div className='col-auto'>
                                <SkillItem icon={java} text={'Java'} />
                            </div>

                            <div className='col-auto'>
                                <SkillItem icon={springBoot} text={'Spring'} />
                            </div>

                            <div className='col-auto'>
                                <SkillItem icon={react} text={'React JS'} />
                            </div>

                            <div className='col-auto'>
                                <SkillItem icon={microservice} text={'Microservice'} />
                            </div>

                            <div className='col-auto'>
                                <SkillItem icon={docker} text={'Docker'} />
                            </div>

                            <div className='col-auto'>
                                <SkillItem icon={kubernetes} text={'Kubernetes'} />
                            </div>

                            <div className='col-auto'>
                                <SkillItem icon={oracle} text={'Oracle DB'} />
                            </div>

                            <div className='col-auto'>
                                <SkillItem icon={rabbitmq} text={'RabbitMQ'} />
                            </div>

                            <div className='col-auto'>
                                <SkillItem icon={kafka} text={'Kafka'} />
                            </div>

                            <div className='col-auto'>
                                <SkillItem icon={prometheus} text={'Prometheus'} />
                            </div>

                            <div className='col-auto'>
                                <SkillItem icon={graphana} text={'Grafana'} />
                            </div>

                            <div className='col-auto'>
                                <SkillItem icon={zipkin} text={'Zipkin'} />
                            </div>

                            <div className='col-auto'>
                                <SkillItem icon={python} text={'Python'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;