document.addEventListener('DOMContentLoaded', (event) => {
    let resources = 0;
    let resourceClickRate = 1;
    let resourceRate = 1;
    let upgradeCost = 10;

    const resourceCountElement = document.getElementById('resource-count');
    const generateButton = document.getElementById('resource-button');
    const upgradeButton = document.getElementById('upgrade-button');

    // Event listener for the manual resource generation button
    generateButton.addEventListener('click', generateResources);

    // Function to update the resource display
    function updateResourceDisplay() {
        resourceCountElement.textContent = resources;
    }

    // Function to generate resources
    function generateResources() {
        resources += resourceClickRate;
        updateResourceDisplay();
    }

    function idleRateResources() {
        resources += resourceRate;
        updateResourceDisplay();
    }

        // Set an interval to generate resources every second
        setInterval(idleRateResources, 1000);
})