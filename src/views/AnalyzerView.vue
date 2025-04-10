<template>
  <div id="tab1" class="tab-content active">
    <input class="hidden" type="file" id="fileInput" accept=".spk, .raw">
    <div class="topBarBlockInfo">
      <div style="width:15vw; min-width: 250px;">
        <div><label class="infoLabel" id="accelPeakTitleLabel"></label><label class="infoLabel bold"
            id="accelPeakLabel"></label></div>
        <div><label class="infoLabel" id="velocityRMSTitleLabel"></label><label class="infoLabel bold"
            id="velocityRMSLabel"></label></div>
        <div><label class="infoLabel" id="displacementSinePeakTitleLabel"></label><label class="infoLabel bold"
            id="displacementSinePeakLabel"></label></div>
      </div>
      <div style="width:15vw; min-width: 250px;">
        <div><label class="infoLabel" id="peakFactorTitleLabel"></label><label class="infoLabel bold"
            id="peakFactorLabel"></label></div>
      </div>
    </div>

    <div id="mainRecordsContainer">
      <div id="recordsListBlock">
        <ul id="recordsList"></ul>
      </div>
      <div id="recordsGraphContainer">
        <div class="graph" id="recordsGraph"></div>
        <div class="graph" id="recordsRawGraph"></div>
      </div>
    </div>
  </div>
</template>