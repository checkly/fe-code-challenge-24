import type { Meta, StoryObj } from '@storybook/vue3'
import StatsChart from './StatsChart.vue'

const meta = {
  title: 'StatsChart',
  component: StatsChart,
  tags: ['autodocs'],
  argTypes: {},
  args: {}
} satisfies Meta<typeof StatsChart>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    stats: [
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.5285714285714286,
        avg: 518.2285714285714,
        p95: 964.3,
        p99: 994.62,
        timestamp: 1720519200000,
        id: '7e84'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.575,
        avg: 492.4947368421053,
        p95: 963.1999999999999,
        p99: 994.22,
        timestamp: 1720515600000,
        id: '46bb'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.575,
        avg: 506.13548387096773,
        p95: 948.3000000000001,
        p99: 991.9100000000001,
        timestamp: 1720512000000,
        id: 'c68c'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.525,
        avg: 500.7651162790698,
        p95: 949.6499999999999,
        p99: 991.71,
        timestamp: 1720508400000,
        id: 'f77f'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.5416666666666666,
        avg: 506.76545454545453,
        p95: 946.0999999999999,
        p99: 991.51,
        timestamp: 1720504800000,
        id: '671b'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.475,
        avg: 511.6313432835821,
        p95: 948,
        p99: 991.31,
        timestamp: 1720501200000,
        id: '6258'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.475,
        avg: 507.8253164556962,
        p95: 947.55,
        p99: 991,
        timestamp: 1720497600000,
        id: '8803'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.44166666666666665,
        avg: 512.4901098901099,
        p95: 946.55,
        p99: 990,
        timestamp: 1720494000000,
        id: 'b119'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.4083333333333333,
        avg: 507.8922330097087,
        p95: 945.55,
        p99: 990,
        timestamp: 1720490400000,
        id: '457a'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.5166666666666667,
        avg: 504.6617391304348,
        p95: 944.55,
        p99: 989.51,
        timestamp: 1720486800000,
        id: '77f1'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.4583333333333333,
        avg: 503.403937007874,
        p95: 943,
        p99: 989.31,
        timestamp: 1720483200000,
        id: '6a3d'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.4666666666666667,
        avg: 505.063309352518,
        p95: 945.55,
        p99: 989.1099999999999,
        timestamp: 1720479600000,
        id: '7b69'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.475,
        avg: 505.96556291390726,
        p95: 947.55,
        p99: 989,
        timestamp: 1720476000000,
        id: '3a70'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.48333333333333334,
        avg: 502.74969325153376,
        p95: 946.55,
        p99: 990,
        timestamp: 1720472400000,
        id: 'db90'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.4583333333333333,
        avg: 500.7371428571429,
        p95: 944,
        p99: 989.51,
        timestamp: 1720468800000,
        id: '08b8'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.5,
        avg: 502.2331550802139,
        p95: 947.55,
        p99: 989.31,
        timestamp: 1720465200000,
        id: 'd247'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.49166666666666664,
        avg: 501.57638190954776,
        p95: 947.55,
        p99: 989.1099999999999,
        timestamp: 1720461600000,
        id: '93ce'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.575,
        avg: 503.82417061611375,
        p95: 947.55,
        p99: 989,
        timestamp: 1720458000000,
        id: 'af0c'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.4666666666666667,
        avg: 503.8847533632287,
        p95: 947,
        p99: 989,
        timestamp: 1720454400000,
        id: 'aa3f'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.5583333333333333,
        avg: 503.3323404255319,
        p95: 946.5499999999997,
        p99: 989,
        timestamp: 1720450800000,
        id: '24ef'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.5083333333333333,
        avg: 501.81295546558704,
        p95: 947.5499999999997,
        p99: 989,
        timestamp: 1720447200000,
        id: 'cd01'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.5,
        avg: 501.75559845559843,
        p95: 948,
        p99: 989,
        timestamp: 1720443600000,
        id: '3dc3'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.4666666666666667,
        avg: 502.6055350553506,
        p95: 950,
        p99: 989,
        timestamp: 1720440000000,
        id: '98d7'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.5333333333333333,
        avg: 501.8551236749117,
        p95: 950,
        p99: 989,
        timestamp: 1720436400000,
        id: 'b707'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.55,
        avg: 504.4613559322034,
        p95: 950,
        p99: 989,
        timestamp: 1720432800000,
        id: 'b3c9'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.48333333333333334,
        avg: 505.3583061889251,
        p95: 950,
        p99: 990,
        timestamp: 1720429200000,
        id: '0deb'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.5833333333333334,
        avg: 507.0896551724138,
        p95: 950.5499999999997,
        p99: 990,
        timestamp: 1720425600000,
        id: '80aa'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.48333333333333334,
        avg: 507.21057401812686,
        p95: 950.5499999999997,
        p99: 990,
        timestamp: 1720422000000,
        id: '7fba'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.525,
        avg: 506.87580174927115,
        p95: 950,
        p99: 990,
        timestamp: 1720418400000,
        id: 'aa7e'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.49166666666666664,
        avg: 504.92929577464787,
        p95: 949.0999999999995,
        p99: 990,
        timestamp: 1720414800000,
        id: '0953'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.48333333333333334,
        avg: 505.83950953678476,
        p95: 950,
        p99: 991,
        timestamp: 1720411200000,
        id: 'a2af'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.5083333333333333,
        avg: 506.55408970976254,
        p95: 950,
        p99: 990.1100000000001,
        timestamp: 1720407600000,
        id: '88f2'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.5333333333333333,
        avg: 504.40485933503834,
        p95: 950,
        p99: 990,
        timestamp: 1720404000000,
        id: '4805'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.55,
        avg: 504.2674937965261,
        p95: 948.5499999999997,
        p99: 990,
        timestamp: 1720400400000,
        id: '2f69'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.4166666666666667,
        avg: 502.1207228915663,
        p95: 948,
        p99: 990,
        timestamp: 1720396800000,
        id: 'b794'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.5333333333333333,
        avg: 503.0981264637002,
        p95: 949.5499999999997,
        p99: 990.3100000000004,
        timestamp: 1720393200000,
        id: '8d17'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.4083333333333333,
        avg: 502.45330296127565,
        p95: 950,
        p99: 990,
        timestamp: 1720389600000,
        id: '2091'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.5333333333333333,
        avg: 501.6942350332594,
        p95: 949.5500000000002,
        p99: 990,
        timestamp: 1720386000000,
        id: '493f'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.5416666666666666,
        avg: 503.595464362851,
        p95: 950,
        p99: 990,
        timestamp: 1720382400000,
        id: 'f3dd'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.6083333333333333,
        avg: 503.8806315789474,
        p95: 950,
        p99: 990,
        timestamp: 1720378800000,
        id: 'e7e0'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.5833333333333334,
        avg: 502.72854209445586,
        p95: 950,
        p99: 990,
        timestamp: 1720375200000,
        id: '959b'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.475,
        avg: 502.57194388777555,
        p95: 950,
        p99: 990,
        timestamp: 1720371600000,
        id: 'bf85'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.5666666666666667,
        avg: 502.7563600782779,
        p95: 950,
        p99: 990,
        timestamp: 1720368000000,
        id: '00f8'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.5,
        avg: 502.89942638623324,
        p95: 950,
        p99: 990,
        timestamp: 1720364400000,
        id: 'ad92'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.625,
        avg: 503.57084112149533,
        p95: 950.5500000000002,
        p99: 990,
        timestamp: 1720360800000,
        id: 'aea0'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.49166666666666664,
        avg: 503.54990859232174,
        p95: 950,
        p99: 990,
        timestamp: 1720357200000,
        id: 'efb9'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.5583333333333333,
        avg: 503.22236135957064,
        p95: 950,
        p99: 990,
        timestamp: 1720353600000,
        id: '80c1'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.5166666666666667,
        avg: 503.34535901926444,
        p95: 950,
        p99: 989.9099999999999,
        timestamp: 1720350000000,
        id: '7ca3'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.4083333333333333,
        avg: 503.34288164665526,
        p95: 950,
        p99: 989,
        timestamp: 1720346400000,
        id: 'be23'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.525,
        avg: 503.0673949579832,
        p95: 950,
        p99: 989,
        timestamp: 1720342800000,
        id: 'd7de'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.44166666666666665,
        avg: 503.1476112026359,
        p95: 950,
        p99: 989,
        timestamp: 1720339200000,
        id: '40ad'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.55,
        avg: 503.4689822294023,
        p95: 950,
        p99: 989,
        timestamp: 1720335600000,
        id: '5586'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.44166666666666665,
        avg: 503.29223454833595,
        p95: 950,
        p99: 989.9099999999999,
        timestamp: 1720332000000,
        id: 'b333'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.49166666666666664,
        avg: 503.7286158631415,
        p95: 950.5499999999993,
        p99: 989,
        timestamp: 1720328400000,
        id: 'de15'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.48333333333333334,
        avg: 503.63862595419846,
        p95: 950,
        p99: 989,
        timestamp: 1720324800000,
        id: '7150'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.5,
        avg: 503.69190404797604,
        p95: 951,
        p99: 989.3099999999995,
        timestamp: 1720321200000,
        id: '41da'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.5333333333333333,
        avg: 503.5901325478645,
        p95: 950.5499999999993,
        p99: 989,
        timestamp: 1720317600000,
        id: 'fc16'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.5833333333333334,
        avg: 503.5947901591896,
        p95: 950,
        p99: 989,
        timestamp: 1720314000000,
        id: '59b6'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.5,
        avg: 503.8950213371266,
        p95: 950,
        p99: 989,
        timestamp: 1720310400000,
        id: '58b7'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.5083333333333333,
        avg: 503.46181818181816,
        p95: 951,
        p99: 989,
        timestamp: 1720306800000,
        id: 'e5cc'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.5166666666666667,
        avg: 503.26341127922973,
        p95: 951,
        p99: 989,
        timestamp: 1720303200000,
        id: '0019'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.48333333333333334,
        avg: 502.3631935047361,
        p95: 951,
        p99: 989,
        timestamp: 1720299600000,
        id: '4d82'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.4583333333333333,
        avg: 502.14141145139814,
        p95: 951,
        p99: 989,
        timestamp: 1720296000000,
        id: 'ff08'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.5166666666666667,
        avg: 501.9019659239843,
        p95: 950.5499999999993,
        p99: 989,
        timestamp: 1720292400000,
        id: '41e3'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.5166666666666667,
        avg: 502.448,
        p95: 950.5499999999993,
        p99: 989,
        timestamp: 1720288800000,
        id: '1d5c'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.55,
        avg: 502.16277001270646,
        p95: 951,
        p99: 990,
        timestamp: 1720285200000,
        id: 'a05b'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.5583333333333333,
        avg: 502.1933667083855,
        p95: 951,
        p99: 990,
        timestamp: 1720281600000,
        id: '7937'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.425,
        avg: 501.66547472256474,
        p95: 951,
        p99: 989.9099999999999,
        timestamp: 1720278000000,
        id: 'a3aa'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.44166666666666665,
        avg: 502.48626974483597,
        p95: 951,
        p99: 990,
        timestamp: 1720274400000,
        id: '6202'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.5333333333333333,
        avg: 502.31952095808384,
        p95: 951,
        p99: 990,
        timestamp: 1720270800000,
        id: '07d4'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.475,
        avg: 501.9149940968123,
        p95: 951,
        p99: 990,
        timestamp: 1720267200000,
        id: '82eb'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.5,
        avg: 501.4022118742724,
        p95: 951,
        p99: 990,
        timestamp: 1720263600000,
        id: 'e601'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.4666666666666667,
        avg: 501.16854190585536,
        p95: 951,
        p99: 989.9099999999999,
        timestamp: 1720260000000,
        id: '0e09'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.55,
        avg: 501.3159682899207,
        p95: 951,
        p99: 990,
        timestamp: 1720256400000,
        id: 'b63a'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.5333333333333333,
        avg: 501.83150837988825,
        p95: 951,
        p99: 990,
        timestamp: 1720252800000,
        id: '84fc'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.5083333333333333,
        avg: 501.08687982359424,
        p95: 951,
        p99: 989.3099999999995,
        timestamp: 1720249200000,
        id: '7b4c'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.43333333333333335,
        avg: 501.61980413492927,
        p95: 951,
        p99: 989.1100000000006,
        timestamp: 1720245600000,
        id: 'b894'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.5,
        avg: 501.65886143931255,
        p95: 951,
        p99: 989,
        timestamp: 1720242000000,
        id: '90f2'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.55,
        avg: 501.5576882290562,
        p95: 951,
        p99: 989.7099999999991,
        timestamp: 1720238400000,
        id: '9921'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.44166666666666665,
        avg: 501.2640837696335,
        p95: 951,
        p99: 990,
        timestamp: 1720234800000,
        id: '2554'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.5166666666666667,
        avg: 501.45367114788,
        p95: 951,
        p99: 990,
        timestamp: 1720231200000,
        id: 'a421'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.49166666666666664,
        avg: 501.2276813074566,
        p95: 951,
        p99: 990,
        timestamp: 1720227600000,
        id: '712e'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.45,
        avg: 501.2518668012109,
        p95: 951,
        p99: 990,
        timestamp: 1720224000000,
        id: '367c'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.48333333333333334,
        avg: 501.17736789631107,
        p95: 951,
        p99: 990,
        timestamp: 1720220400000,
        id: '8553'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.48333333333333334,
        avg: 500.8808866995074,
        p95: 951,
        p99: 990,
        timestamp: 1720216800000,
        id: 'bdb1'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.5833333333333334,
        avg: 500.74303797468355,
        p95: 951,
        p99: 990,
        timestamp: 1720213200000,
        id: '6905'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.5833333333333334,
        avg: 501.04956689124157,
        p95: 951,
        p99: 990,
        timestamp: 1720209600000,
        id: 'e1af'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.4166666666666667,
        avg: 500.8977164605138,
        p95: 951,
        p99: 990,
        timestamp: 1720206000000,
        id: '8bd3'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.5166666666666667,
        avg: 500.88805268109127,
        p95: 951,
        p99: 990,
        timestamp: 1720202400000,
        id: '7a07'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.38333333333333336,
        avg: 500.88381395348836,
        p95: 951,
        p99: 990,
        timestamp: 1720198800000,
        id: '1084'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.5,
        avg: 500.5790248390064,
        p95: 951,
        p99: 990,
        timestamp: 1720195200000,
        id: '9115'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.4666666666666667,
        avg: 501.0084622383985,
        p95: 951,
        p99: 990,
        timestamp: 1720191600000,
        id: '9e9d'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.5333333333333333,
        avg: 501.83411341134115,
        p95: 952,
        p99: 990,
        timestamp: 1720188000000,
        id: '1154'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.5333333333333333,
        avg: 501.88085485307215,
        p95: 951,
        p99: 990,
        timestamp: 1720184400000,
        id: '50c6'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.5166666666666667,
        avg: 501.5221145374449,
        p95: 951,
        p99: 989.5100000000002,
        timestamp: 1720180800000,
        id: '157b'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.5,
        avg: 501.7821272885789,
        p95: 951,
        p99: 990,
        timestamp: 1720177200000,
        id: '5779'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.5666666666666667,
        avg: 501.2886971527179,
        p95: 951,
        p99: 990,
        timestamp: 1720173600000,
        id: 'aefc'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.5333333333333333,
        avg: 501.01434671221176,
        p95: 951,
        p99: 989.9099999999999,
        timestamp: 1720170000000,
        id: '6944'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.525,
        avg: 500.77337278106506,
        p95: 951,
        p99: 990,
        timestamp: 1720166400000,
        id: 'd364'
      },
      {
        checkId: 'ffd3ebe7-07ea-48a7-8246-779fc88d8355',
        success: 0.5333333333333333,
        avg: 500.596820083682,
        p95: 951,
        p99: 990,
        timestamp: 1720162800000,
        id: '4776'
      }
    ]
  }
}
