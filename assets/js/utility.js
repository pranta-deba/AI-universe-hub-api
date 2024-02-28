// all load data
const loadData = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/ai/tools');
    const data = await response.json();
    displayData(data);
}

// loading spinner toggle
const loadingSpinnerToggle = (isLoading) => {
    const loadingSpinnerContainer = document.getElementById('loadingSpinnerContainer');
    if (isLoading) {
        loadingSpinnerContainer.classList.remove('hidden');
    }else{
        loadingSpinnerContainer.classList.add('hidden');
    }
}

// see all container toggle
const seeAllContainerToggle = (isSee) => {
    const seeAllContainer = document.getElementById('seeAllContainer');
    if (isSee) {
        seeAllContainer.classList.remove('hidden');
    }else{
        seeAllContainer.classList.add('hidden');
    }
}