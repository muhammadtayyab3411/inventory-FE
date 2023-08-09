import React, { useState } from 'react';
import "./storageLocations.css";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@material-ui/core";

const StorageLocations = () => {

    const buttonStyle = {
    backgroundColor: "#10A760",
    color: "#fff",
  };

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newStores, setNewStores] = useState([]);
  const [warehouseName, setWarehouseName] = useState([]);
  const [storeName, setStoreName] = useState([]);
  const [currentOccupancy, setCurrentOccupancy] = useState([]);
  const [locationId, setLocationId] = useState([]);
  const [totalStorage, setTotalStorage] = useState([]);
  const [temperature, setTemperature] = useState([]);
  const [safetyInfo, setSafetyInfo] = useState([]);

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleAddStore = () => {
    setIsDialogOpen(true)
  }

  const handleSaveStore = () => {
    const newStore = {
    warehouseName: warehouseName,
    storeName: storeName,
    totalStorage: totalStorage,
    currentOccupancy: currentOccupancy,
    locationId: locationId,
    temperature: temperature,
    safetyInfo: safetyInfo,
  };

  setNewStores([...newStores, newStore]);

  // Reset input fields
  setWarehouseName('');
  setStoreName('');
  setTotalStorage('');
  setCurrentOccupancy('');
  setLocationId('');
  setTemperature('');
  setSafetyInfo('');

  // Close the dialog
  setIsDialogOpen(false);
  };

  return (
    <div>
      <div className="storageLocations container rounded-lg p-4 mt-2 mb-0">
            <div className="topHead">
                <div className="manageStoreHeading">Storage</div>
                <Button
                variant="contained"
                className="add-btn"
                style={buttonStyle}
                onClick={handleAddStore}
                >
                Add Store
                </Button>
            </div>

            <div className="store">
                <div className="warehouseName">KoboWeb</div>

                <div className="storeInfo">
                    <div className="storeName">Freezer Storage</div>
                    <div className="info">
                        <div className="infoCol1">
                            <p>Storage Capacity: <span>5000 Tons</span></p>
                            <p>Current Occupancy: <span>2000 Tons</span></p>
                            <p>Location ID: <span>345212</span></p>
                            <p>Temperature: <span>30-40<sup>o</sup>F</span></p>
                        </div>
                        <div className="infoCol2">
                            <p>Safety Info: <span>Caution: Handle with Care,
                            Maintain Temperature Range.</span></p>
                        </div>
                    </div>
                </div>

                <div className="options">
                    <button className='editBtn'>Edit</button>
                    <button className='viewBtn'>View</button>
                </div>
            </div>

            {newStores.map((store, index) => (
            <div key={index} className="store">
            <div className="warehouseName">{store.warehouseName}</div>

                <div className="storeInfo">
                    <div className="storeName">{store.storeName}</div>
                    <div className="info">
                        <div className="infoCol1">
                            <p>Storage Capacity: <span>{store.totalStorage}</span></p>
                            <p>Current Occupancy: <span>{store.currentOccupancy}</span></p>
                            <p>Location ID: <span>{store.locationId}</span></p>
                            <p>Temperature: <span>{store.temperature}<sup>o</sup>F</span></p>
                        </div>
                        <div className="infoCol2">
                            <p>Safety Info: <span>{store.safetyInfo}</span></p>
                        </div>
                    </div>
                </div>

                <div className="options">
                    <button className='editBtn'>Edit</button>
                    <button className='viewBtn'>View</button>
                </div>
            </div>
            ))}

        <Dialog
        open={isDialogOpen}
        onClose={handleCloseDialog}
        className="dialog"
      >
        <DialogTitle className="dialogTitle">Add Store</DialogTitle>
        <DialogContent className="d-flex flex-column dialogContent">

          <div className="addItemField d-flex align-items-center justify-content-between">
            <p>Warehouse Name</p>
            <div className="inputField">
              <input
                label="Warehouse Name"
                placeholder="Enter Warehouse Name"
                value={warehouseName}
                onChange={(e) => setWarehouseName(e.target.value)}
              />
            </div>
          </div>

          <div className="addItemField d-flex align-items-center justify-content-between">
            <p>Storage Name</p>
            <div className="inputField">
              <input
                label="Storage Name"
                placeholder="Enter Storage Name"
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
              />
            </div>
          </div>

          <div className="addItemField d-flex align-items-center justify-content-between">
            <p>Total Storage</p>
            <div className="inputField">
              <input
                label="Total Storage"
                placeholder="Enter Total Storage"
                value={totalStorage}
                onChange={(e) => setTotalStorage(e.target.value)}
              />
            </div>
          </div>

          <div className="addItemField d-flex align-items-center justify-content-between">
            <p>Occupancy</p>
            <div className="inputField">
              <input
                label="Buying Price"
                placeholder="Enter Current Occupancy"
                value={currentOccupancy}
                onChange={(e) => setCurrentOccupancy(e.target.value)}
              />
            </div>
          </div>

          <div className="addItemField d-flex align-items-center justify-content-between">
            <p>Location ID</p>
            <div className="inputField">
              <input
                label="Location ID"
                placeholder="Enter Location ID"
                value={locationId}
                onChange={(e) => setLocationId(e.target.value)}
              />
            </div>
          </div>


          <div className="addItemField d-flex align-items-center justify-content-between">
            <p>Temperature</p>
            <div className="inputField">
              <input
                label="Temperature"
                placeholder="Enter Temperature"
                value={temperature}
                onChange={(e) => setTemperature(e.target.value)}
              />
            </div>
          </div>

          <div className="addItemField d-flex align-items-center justify-content-between">
            <p>Safety Info</p>
            <div className="inputField">
              <input
                label="Safety Info"
                placeholder="Enter Safety Info"
                value={safetyInfo}
                onChange={(e) => setSafetyInfo(e.target.value)}
              />
            </div>
          </div>
        </DialogContent>
        <DialogActions className="dialogAction">
          <Button onClick={handleCloseDialog} className="border px-17 py-9">
            Discard
          </Button>
          <Button
            onClick={handleSaveStore}
            color="primary"
            className="border px-17 py-9"
            style={buttonStyle}
          >
            Add Store
          </Button>
        </DialogActions>
      </Dialog>

        </div>
    </div>
  )
}

export default StorageLocations
