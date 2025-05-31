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
    const { direction, origin, destination } = fullpageState?.fullpageState || {};
    const isEntering = destination?.anchor === 'skills';

    const animation = isEntering
        ? direction === 'up'
            ? 'animation-slideInFromTop'
            : direction === 'down'
                ? 'animation-slideInFromBelow'
                : ''
        : direction === 'up'
            ? 'animation-slideOutDown'
            : direction === 'down'
                ? 'animation-fadeOutUpBig'
                : '';

    const animDesc = isEntering
        ? direction === 'up'
            ? 'animation-slideInFromTop animation-duration-1200ms'
            : direction === 'down'
                ? 'animation-slideInFromBelow animation-duration-1200ms'
                : ''
        : direction === 'up'
            ? 'animation-slideOutDown animation-duration-2000ms'
            : direction === 'down'
                ? 'animation-fadeOutUpBig animation-duration-900ms'
                : '';

    const skillItems = [
        [java, 'Java'],
        [springBoot, 'Spring'],
        [react, 'React JS'],
        [microservice, 'Microservice'],
        [docker, 'Docker'],
        [kubernetes, 'Kubernetes'],
        [oracle, 'Oracle DB'],
        [rabbitmq, 'RabbitMQ'],
        [kafka, 'Kafka'],
        [prometheus, 'Prometheus'],
        [graphana, 'Grafana'],
        [zipkin, 'Zipkin'],
        [python, 'Python']
    ];

    const firstRow = skillItems.slice(0, 7);
    const secondRow = skillItems.slice(7);

    return (
        <div className="section skills">
            <div className='container'>
                <div className='row align-items-center mb-5'>
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
                        <p className={`${animDesc}`}>The main area of expertise is backend development, system design and DevOps.</p>
                        <p className={`skill-desc ${animDesc}`}>Building medium and large web applications with Java and ReactJS while maintaining the scalability and robustness to support millions of data and users. </p>
                        <p className={`${animDesc}`}>Please visit my <a className='linkedin' href='#'>Linkedin</a> for more details</p>

                        <div className='row justify-content-center align-items-center'>
                            {firstRow.map(([icon, text], index) => {
                                const reversedIndex = direction === 'up' ? firstRow.length - 1 - index : index;
                                const durationClass = `animation-duration-${1000 + reversedIndex * 100}ms`;
                                return (
                                    <div key={text} className={`col-auto mx-3 mt-4 animated ${animation} ${durationClass}`}>
                                        <SkillItem icon={icon} text={text} />
                                    </div>
                                );
                            })}
                        </div>

                        <div className='row justify-content-center align-items-center'>
                            {secondRow.map(([icon, text], index) => {
                                const totalIndex = index + firstRow.length;
                                const reversedIndex = direction === 'up' ? skillItems.length - 1 - totalIndex : totalIndex;
                                const durationClass = `animation-duration-${1000 + reversedIndex * 100}ms`;
                                return (
                                    <div key={text} className={`col-auto mx-3 mt-5 animated ${animation} ${durationClass}`}>
                                        <SkillItem icon={icon} text={text} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;