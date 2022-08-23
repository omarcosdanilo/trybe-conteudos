class TV {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: {video: string, rede: string, dados: string};
  private _connectedTo: string;

  constructor(
    brand: string, size: number, resolution: string, connections: {video: string, rede: string, dados: string}, connectedTo: string
    ) {
      this._brand = brand;
      this._size = size;
      this._resolution = resolution;
      this._connections = connections;
      this._connectedTo = connectedTo;
    };

    get connectedTo() {
      return this._connectedTo;
    };

    set connectedTo(newValue: string) {
      const { video, rede, dados } = this._connections;

      if (newValue === video || newValue === rede || newValue === dados) {
        this._connectedTo = newValue;
      } else {
        console.log('Sorry, connection unavailable!');
      }
    };
};

const smartTv = new TV(
  'Samsung', 55, '1920 x 1640', { video: 'HDMI', rede: 'Ethernet', dados: 'USB 3.0'}, 'HDMI'
  );

console.log(smartTv.connectedTo);
smartTv.connectedTo = 'teste';
smartTv.connectedTo = 'Ethernet';
console.log(smartTv.connectedTo);

