import { useState } from "react";
import { Download, Plus, Eye, Printer } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface Table {
  id: number;
  number: string;
  qrCode: string;
  section?: string;
}

const mockTables: Table[] = [
  { id: 1, number: "1", qrCode: "QR-001", section: "Terraza" },
  { id: 2, number: "2", qrCode: "QR-002", section: "Terraza" },
  { id: 3, number: "3", qrCode: "QR-003", section: "Interior" },
  { id: 4, number: "4", qrCode: "QR-004", section: "Interior" },
  { id: 5, number: "5", qrCode: "QR-005", section: "Barra" }
];

export function QRManager() {
  const [tables, setTables] = useState<Table[]>(mockTables);
  const [newTableNumber, setNewTableNumber] = useState("");

  const addTable = () => {
    if (newTableNumber) {
      const newTable: Table = {
        id: Date.now(),
        number: newTableNumber,
        qrCode: `QR-${String(tables.length + 1).padStart(3, '0')}`,
        section: "Sin asignar"
      };
      setTables([...tables, newTable]);
      setNewTableNumber("");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl mb-2">Mesas y Códigos QR</h1>
          <p className="text-gray-600">Genera y gestiona los QR para cada mesa</p>
        </div>
        <Button className="bg-[#1e40af] hover:bg-[#1e3a8a]">
          <Printer className="mr-2 w-5 h-5" />
          Imprimir todos
        </Button>
      </div>
      
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <h3 className="text-lg mb-4">Agregar nueva mesa</h3>
        <div className="flex gap-3 mb-6">
          <div className="flex-1">
            <Label htmlFor="tableNumber">Número de mesa</Label>
            <Input
              id="tableNumber"
              placeholder="Ej: 10"
              value={newTableNumber}
              onChange={(e) => setNewTableNumber(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addTable()}
            />
          </div>
          <div className="flex items-end">
            <Button 
              className="bg-[#1e40af] hover:bg-[#1e3a8a]"
              onClick={addTable}
            >
              <Plus className="w-5 h-5 mr-2" />
              Agregar mesa
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tables.map((table) => (
            <div
              key={table.id}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-center mb-4">
                <div className="w-32 h-32 mx-auto bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center mb-3">
                  {/* QR Code Placeholder */}
                  <div className="w-24 h-24 bg-gradient-to-br from-gray-800 to-gray-600 rounded-lg flex items-center justify-center">
                    <div className="grid grid-cols-4 gap-1 p-2">
                      {[...Array(16)].map((_, i) => (
                        <div 
                          key={i} 
                          className="w-2 h-2 bg-white rounded-sm"
                          style={{ opacity: Math.random() > 0.3 ? 1 : 0 }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <h4 className="text-xl mb-1">Mesa {table.number}</h4>
                <p className="text-sm text-gray-500">{table.section}</p>
                <p className="text-xs text-gray-400 mt-1">{table.qrCode}</p>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Eye className="w-4 h-4 mr-1" />
                  Ver
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Download className="w-4 h-4 mr-1" />
                  Descargar
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-green-50 border border-green-200 rounded-xl p-6">
        <h4 className="text-green-700 mb-2">📱 Cómo usar los códigos QR</h4>
        <ol className="text-sm text-gray-700 space-y-2 list-decimal list-inside">
          <li>Descarga el QR de cada mesa en formato PDF o PNG</li>
          <li>Imprime los códigos en tamaño A5 o superior</li>
          <li>Coloca los QR en un lugar visible de cada mesa (puede ser dentro de un portamenú)</li>
          <li>Los clientes escanean el QR con su teléfono y acceden directamente a tu carta</li>
        </ol>
      </div>
    </div>
  );
}
