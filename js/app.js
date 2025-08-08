// Global variables for rates
let goldRate = 0;
let silverRate = 0;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    fetchLiveRates();
    setupFormHandlers();
    setupValidation();
});

// Fetch live gold and silver rates
async function fetchLiveRates() {
    try {
        // Using a free API for gold and silver rates (simulated for demo)
        // In production, you would use a real API like:
        // https://api.metals.live/v1/spot
        // or https://api.goldapi.io/
        
        // Simulated rates for demo purposes
        goldRate = 220000; // PKR per tola (11.66 grams)
        silverRate = 2500; // PKR per tola (11.66 grams)
        
        // Convert to per gram
        goldRatePerGram = goldRate / 11.66;
        silverRatePerGram = silverRate / 11.66;
        
        document.getElementById('goldRate').textContent = `PKR ${goldRatePerGram.toLocaleString(undefined, {minimumFractionDigits: 2})} per gram`;
        document.getElementById('silverRate').textContent = `PKR ${silverRatePerGram.toLocaleString(undefined, {minimumFractionDigits: 2})} per gram`;
        
    } catch (error) {
        console.error('Error fetching rates:', error);
        document.getElementById('goldRate').textContent = 'Rate unavailable';
        document.getElementById('silverRate').textContent = 'Rate unavailable';
    }
}

// Setup form handlers
function setupFormHandlers() {
    const form = document.getElementById('inheritance-form');
    
    // Handle spouse checkbox
    const spouseCheckbox = document.getElementById('spouse');
    const spouseTypeGroup = document.getElementById('spouseTypeGroup');
    
    spouseCheckbox.addEventListener('change', function() {
        if (this.checked) {
            spouseTypeGroup.style.display = 'block';
            document.getElementById('spouseType').setAttribute('required', 'required');
        } else {
            spouseTypeGroup.style.display = 'none';
            document.getElementById('spouseType').removeAttribute('required');
            document.getElementById('spouseType').value = '';
        }
    });
    
    // Handle children count changes
    const sonsCount = document.getElementById('sonsCount');
    const daughtersCount = document.getElementById('daughtersCount');
    
    sonsCount.addEventListener('input', function() {
        updateChildrenDetails('sons', parseInt(this.value) || 0);
    });
    
    daughtersCount.addEventListener('input', function() {
        updateChildrenDetails('daughters', parseInt(this.value) || 0);
    });
    
    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show loading state
        const submitBtn = this.querySelector('.btn');
        const originalText = submitBtn.textContent;
        submitBtn.innerHTML = '<span class="loading"></span> Calculating...';
        submitBtn.disabled = true;
        
        // Simulate a small delay for better UX
        setTimeout(() => {
            calculateInheritance();
            
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 500);
    });
}

// Update children details sections
function updateChildrenDetails(type, count) {
    const detailsDiv = document.getElementById(`${type}Details`);
    const listDiv = document.getElementById(`${type}List`);
    
    if (count > 0) {
        detailsDiv.style.display = 'block';
        listDiv.innerHTML = '';
        
        for (let i = 1; i <= count; i++) {
            const childDiv = document.createElement('div');
            childDiv.className = 'child-item';
            childDiv.innerHTML = `
                <label>${type.charAt(0).toUpperCase() + type.slice(1, -1)} ${i}:</label>
                <input type="text" class="form-control" placeholder="Name (optional)" id="${type}${i}Name">
            `;
            listDiv.appendChild(childDiv);
        }
    } else {
        detailsDiv.style.display = 'none';
    }
}

// Setup form validation
function setupValidation() {
    const form = document.getElementById('inheritance-form');
    const inputs = form.querySelectorAll('input, select');
    
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            this.classList.remove('error');
        });
        
        input.addEventListener('blur', function() {
            if (this.hasAttribute('required') && !this.value) {
                this.classList.add('error');
            }
        });
    });
}

// Main inheritance calculation function
function calculateInheritance() {
    // Get estate values
    const totalEstate = parseFloat(document.getElementById('totalEstate').value) || 0;
    const goldWeight = parseFloat(document.getElementById('goldWeight').value) || 0;
    const silverWeight = parseFloat(document.getElementById('silverWeight').value) || 0;
    
    // Calculate precious metals value
    const goldValue = goldWeight * (goldRate / 11.66); // Convert tola to gram rate
    const silverValue = silverWeight * (silverRate / 11.66);
    const totalValue = totalEstate + goldValue + silverValue;
    
    // Get family members
    const fatherAlive = document.getElementById('father').checked;
    const motherAlive = document.getElementById('mother').checked;
    const spouseAlive = document.getElementById('spouse').checked;
    const spouseType = document.getElementById('spouseType').value;
    const sonsCount = parseInt(document.getElementById('sonsCount').value) || 0;
    const daughtersCount = parseInt(document.getElementById('daughtersCount').value) || 0;
    const grandfatherAlive = document.getElementById('grandfather').checked;
    const grandmotherAlive = document.getElementById('grandmother').checked;
    const brothersAlive = document.getElementById('brothers').checked;
    const sistersAlive = document.getElementById('sisters').checked;
    
    // Calculate inheritance distribution
    const result = calculateIslamicInheritance({
        totalValue,
        fatherAlive,
        motherAlive,
        spouseAlive,
        spouseType,
        sonsCount,
        daughtersCount,
        grandfatherAlive,
        grandmotherAlive,
        brothersAlive,
        sistersAlive
    });
    
    displayResults(result, totalValue, {
        estate: totalEstate,
        gold: { weight: goldWeight, value: goldValue },
        silver: { weight: silverWeight, value: silverValue }
    });
}

// Islamic inheritance calculation logic
function calculateIslamicInheritance(family) {
    let remaining = family.totalValue;
    let result = {};
    
    // 1. Spouse share (if alive)
    if (family.spouseAlive && family.spouseType) {
        if (family.spouseType === "wife") {
            // Wife gets 1/8 if there are children, 1/4 if no children
            const wifeShare = family.sonsCount > 0 || family.daughtersCount > 0 ? 0.125 : 0.25;
            result["Wife"] = family.totalValue * wifeShare;
            remaining -= result["Wife"];
        } else if (family.spouseType === "husband") {
            // Husband gets 1/4 if there are children, 1/2 if no children
            const husbandShare = family.sonsCount > 0 || family.daughtersCount > 0 ? 0.25 : 0.5;
            result["Husband"] = family.totalValue * husbandShare;
            remaining -= result["Husband"];
        }
    }
    
    // 2. Parents share
    if (family.motherAlive) {
        // Mother gets 1/6 if there are children, 1/3 if no children
        const motherShare = (family.sonsCount > 0 || family.daughtersCount > 0) ? 0.1667 : 0.3333;
        result["Mother"] = family.totalValue * motherShare;
        remaining -= result["Mother"];
    }
    
    if (family.fatherAlive) {
        // Father gets 1/6 if there are children, 1/3 if no children
        const fatherShare = (family.sonsCount > 0 || family.daughtersCount > 0) ? 0.1667 : 0.3333;
        result["Father"] = family.totalValue * fatherShare;
        remaining -= result["Father"];
    }
    
    // 3. Children share (sons get 2 shares, daughters get 1 share)
    let totalShares = family.sonsCount * 2 + family.daughtersCount * 1;
    if (totalShares > 0) {
        if (family.sonsCount > 0) {
            result["Sons"] = (remaining * 2 / totalShares) * family.sonsCount;
        }
        if (family.daughtersCount > 0) {
            result["Daughters"] = (remaining * 1 / totalShares) * family.daughtersCount;
        }
    }
    
    // 4. Extended family (if no children)
    if (totalShares === 0) {
        if (family.grandfatherAlive) {
            result["Grandfather"] = remaining * 0.1667;
            remaining -= result["Grandfather"];
        }
        
        if (family.grandmotherAlive) {
            result["Grandmother"] = remaining * 0.1667;
            remaining -= result["Grandmother"];
        }
        
        if (family.brothersAlive) {
            result["Brothers"] = remaining * 0.5;
            remaining -= result["Brothers"];
        }
        
        if (family.sistersAlive) {
            result["Sisters"] = remaining * 0.5;
            remaining -= result["Sisters"];
        }
    }
    
    return result;
}

// Display results with enhanced formatting
function displayResults(result, totalValue, assets) {
    const resultDiv = document.getElementById('result');
    
    let output = `
        <h3>📊 Islamic Inheritance Distribution</h3>
        
        <div style="margin-bottom: 20px; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #FFD700;">
            <strong>💰 Total Estate Value:</strong> <span class="amount">PKR ${totalValue.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
        </div>
    `;
    
    // Show asset breakdown
    if (assets.gold.weight > 0 || assets.silver.weight > 0) {
        output += `
            <div style="margin-bottom: 20px; padding: 15px; background: linear-gradient(135deg, #fff3cd, #ffeaa7); border-radius: 8px; border: 1px solid #ffd700;">
                <h4 style="margin-bottom: 10px; color: #856404;">🥇 Asset Breakdown</h4>
        `;
        
        if (assets.estate > 0) {
            output += `<div style="margin-bottom: 8px;"><strong>Cash/Property:</strong> PKR ${assets.estate.toLocaleString()}</div>`;
        }
        
        if (assets.gold.weight > 0) {
            output += `<div style="margin-bottom: 8px;"><strong>Gold (${assets.gold.weight}g):</strong> PKR ${assets.gold.value.toLocaleString(undefined, {minimumFractionDigits: 2})}</div>`;
        }
        
        if (assets.silver.weight > 0) {
            output += `<div style="margin-bottom: 8px;"><strong>Silver (${assets.silver.weight}g):</strong> PKR ${assets.silver.value.toLocaleString(undefined, {minimumFractionDigits: 2})}</div>`;
        }
        
        output += `</div>`;
    }
    
    output += `<ul>`;
    
    let totalDistributed = 0;
    
    for (let key in result) {
        const amount = result[key];
        totalDistributed += amount;
        output += `
            <li>
                <span>${key}</span>
                <span class="amount">PKR ${amount.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
            </li>
        `;
    }
    
    // Add remaining amount if any
    const remaining = totalValue - totalDistributed;
    if (remaining > 0) {
        output += `
            <li style="border-left-color: #E74C3C;">
                <span>Remaining (Unallocated)</span>
                <span class="amount" style="color: #E74C3C;">PKR ${remaining.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
            </li>
        `;
    }
    
    output += `</ul>`;
    
    // Add summary
    output += `
        <div style="margin-top: 20px; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #2E8B57;">
            <strong>📋 Summary:</strong> PKR ${totalDistributed.toLocaleString(undefined, {minimumFractionDigits: 2})} distributed out of PKR ${totalValue.toLocaleString(undefined, {minimumFractionDigits: 2})}
        </div>
    `;
    
    resultDiv.innerHTML = output;
    resultDiv.style.display = 'block';
    
    // Scroll to results
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
