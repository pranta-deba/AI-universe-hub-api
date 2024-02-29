//  display data
const displayData = (data) => {
  const cardContainer = document.getElementById("cardContainer");
  data.forEach((items) => {
    
    const div = document.createElement("div");
    div.classList = "card bg-base-100 shadow-xl p-4 border border-2 boder-[#CFCFCF] h-[600px] w-full";
    div.innerHTML = `<figure class="px-8 py-8 bg-[#100F0F0D] min-h-[260px]">
        <img class="w-full" src="${items.image}" alt="server down, please wait......"/>
    </figure>
    <div class="card-body">
        <h2 class="card-title text-2xl font-semibold">${items.name}</h2>
        <ul class="text-base font-normal list-decimal px-5" id="featuresContainer">
            ${(items.features[0] === undefined) ? "" : `<li>${items.features[0]}</li>`}
            ${(items.features[1] === undefined) ? "" : `<li>${items.features[1]}</li>`}
            ${(items.features[2] === undefined) ? "" : `<li>${items.features[2]}</li>`}
            ${(items.features[3] === undefined) ? "" : `<li>${items.features[3]}</li>`}
            ${(items.features[4] === undefined) ? "" : `<li>${items.features[4]}</li>`}
        </ul>
        <hr>
        <h2 class="card-title text-2xl font-semibold">Features</h2>
        <div class="flex justify-between items-center">
            <div class="flex gap-2">
                <img src="./assets/images/dateIcon.svg" alt="">
                <p class="text-base font-medium">${items.published_in}</p>
            </div>
            <a onclick="detailsHandler('${items.id}')" class="cursor-pointer"><img src="./assets/images/arrow.svg" alt=""></a>
        </div>
    </div>`;
    cardContainer.appendChild(div);
  });
  loadingSpinnerToggle(false);
  seeAllContainerToggle(true);
};

// display Details 
const displayDetails = (details) => {
    const detailsModalContainer = document.querySelector('.detailsModalContainer');
    detailsModalContainer.querySelector('.description').innerText = details?.description || "";
    detailsModalContainer.querySelector('.pricing1').innerText = (details.pricing === null ? "" : details?.pricing[0]?.plan || "");
    detailsModalContainer.querySelector('.pricing2').innerText = (details.pricing === null ? "" : details?.pricing[1]?.plan || "");
    detailsModalContainer.querySelector('.pricing3').innerText = (details.pricing === null ? "" : details?.pricing[2]?.plan || "");
    detailsModalContainer.querySelector('.pricingVal1').innerText = (details.pricing === null ? "" : details?.pricing[0]?.price || "");
    detailsModalContainer.querySelector('.pricingVal2').innerText = (details.pricing === null ? "" : details?.pricing[1]?.price || "");
    detailsModalContainer.querySelector('.pricingVal3').innerText = (details.pricing === null ? "" : details?.pricing[2]?.price || "");
    detailsModalContainer.querySelector('.features1').innerText = details?.features['1']?.feature_name || "";
    detailsModalContainer.querySelector('.features2').innerText = details?.features['2']?.feature_name || "";
    detailsModalContainer.querySelector('.features3').innerText = details?.features['3']?.feature_name || "";
    detailsModalContainer.querySelector('.integrations1').innerText = (details.integrations === null ? "nothing.." : details?.integrations[0] || "");
    detailsModalContainer.querySelector('.integrations2').innerText = (details.integrations === null ? "" : details?.integrations[1] || "");
    detailsModalContainer.querySelector('.integrations3').innerText = (details.integrations === null ? "" : details?.integrations[2] || "");
    detailsModalContainer.querySelector('.img').src = details?.image_link[0] || "./assets/images/loading.jpg";
    detailsModalContainer.querySelector('.accuracyScore').innerText = details?.accuracy?.score || "0";
    my_modal_4.showModal();
};


// call loading spinner and load data to display
loadingSpinnerToggle(true);
loadData()