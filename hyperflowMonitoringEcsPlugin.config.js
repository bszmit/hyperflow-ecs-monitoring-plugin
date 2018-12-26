var PROMETHEUS_PUSHGATEWAY = process.env.PROMETHEUS_PUSHGATEWAY ? process.env.PROMETHEUS_PUSHGATEWAY : 'http://localhost:9091';
var METRIC_COLLECTOR = process.env.METRIC_COLLECTOR ? process.env.METRIC_COLLECTOR : 'localhost:9002';
var METRIC_COLLECTOR_TYPE = process.env.METRIC_COLLECTOR_TYPE ? process.env.METRIC_COLLECTOR_TYPE : 'visor';
var SERVER_NAME = process.env.SERVER_NAME ? process.env.SERVER_NAME : 'HyperFlow';
var AMQP_URL = process.env.AMQP_URL ? process.env.AMQP_URL : "amqp://localhost:5672";
var RABBITMQ_USER = process.env.RABBITMQ_USER ? process.env.RABBITMQ_USER : "guest";
var RABBITMQ_PASSWORD = process.env.RABBITMQ_PASSWORD ? process.env.RABBITMQ_PASSWORD : "guest";

var AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID ? process.env.AWS_ACCESS_KEY_ID : "";
var AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY ? process.env.AWS_SECRET_ACCESS_KEY : "";
var AWS_REGION = process.env.AWS_REGION ? process.env.AWS_REGION : 'us-east-1';
var CLUSTER_NAME = process.env.CLUSTER_NAME ? process.env.CLUSTER_NAME :  'ecs_test_cluster_hyperflow';

module.exports = {
    prometheusPushGatewaway: PROMETHEUS_PUSHGATEWAY,
    metricCollector: METRIC_COLLECTOR,
    metricCollectorType: METRIC_COLLECTOR_TYPE,
    serverName: SERVER_NAME,
    amqpURL: AMQP_URL,
    rabbitmqUser: RABBITMQ_USER,
    rabbitmqPassword: RABBITMQ_PASSWORD,
    awsAccessKey : AWS_ACCESS_KEY_ID,
    awsSecretAccessKey : AWS_SECRET_ACCESS_KEY,
    awsRegion: AWS_REGION,
    clusterName:CLUSTER_NAME
};