import WorldMap from './WorldMap';
import LineGraph from './LineGraph';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const Chart = () => {
  return (
    <div className="container w-full mx-auto pt-2 mb-4">
      <Tabs defaultValue="lineGraph">
        <TabsList>
          <TabsTrigger value="lineGraph">Line Graph</TabsTrigger>
          <TabsTrigger value="map">Map </TabsTrigger>
        </TabsList>
        <TabsContent value="lineGraph">
          <LineGraph />
        </TabsContent>
        <TabsContent value="map">
          <WorldMap />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Chart;
