let contributors = [];

// ADDING A NEW CONTRIBUTOR TO THE SYSTEM
function addContributor(name, startingBalance, gender) {
    // Check if the name already exists
    let exists = false;
    let i = 0;
    while (i < contributors.length) {
        if (contributors[i].name === name) {
            exists = true;
            break;
        }
        i = i + 1;
    }

    if (exists) {
        console.log(name + " already exists.");
        return;
    }

    // Create contributor manually
    let newContributor = {
        name: name,
        startingBalance: startingBalance,
        gender: gender
    };

    // Add manually to array
    contributors[contributors.length] = newContributor;

    console.log(name + " has been added with a starting balance of ₦" + startingBalance);
}

// SHOW CONTRIBUTOR'S CURRENT BALANCE
function checkBalance(name) {
    let found = false;
    let i = 0;
    while (i < contributors.length) {
        if (contributors[i].name === name) {
            console.log(name + "'s current balance is ₦" + contributors[i].startingBalance);
            found = true;
            break;
        }
        i = i + 1;
    }

    if (found === false) {
        console.log(name + " does not exist.");
    }
}

// UPDATE - Add payment or withdraw funds
function updateBalance(name, amount) {
    let found = false;
    let i = 0;
    while (i < contributors.length) {
        if (contributors[i].name === name) {
            contributors[i].startingBalance = contributors[i].startingBalance + amount;

            let action = "";
            if (amount >= 0) {
                action = "Deposited";
            } else {
                action = "Withdrew";
            }

            // Manual absolute value
            let displayAmount = amount;
            if (amount < 0) {
                displayAmount = 0 - amount;
            }

            console.log(action + " ₦" + displayAmount + " for " + name + ". New balance: ₦" + contributors[i].startingBalance);
            found = true;
            break;
        }
        i = i + 1;
    }

    if (found === false) {
        console.log(name + " does not exist.");
    }
}

// DELETE - Remove contributor
function deleteContributor(name) {
    let index = -1;
    let i = 0;
    while (i < contributors.length) {
        if (contributors[i].name === name) {
            index = i;
            break;
        }
        i = i + 1;
    }

    if (index === -1) {
        console.log(name + " does not exist.");
        return;
    }

    // Shift everything left manually
    let j = index;
    while (j < contributors.length - 1) {
        contributors[j] = contributors[j + 1];
        j = j + 1;
    }

    // Remove last item
    contributors.length = contributors.length - 1;

    console.log(name + " has been removed.");
}

addContributor('Jerry', 2000, 'male');
addContributor('Kingsley', 100, 'male');
addContributor('Lois', 450, 'female');
addContributor('Nneka', 4000, 'female');
addContributor('Faith', 300, 'female');
addContributor('Jethro', 600, 'male');
addContributor('Lawrence', 1200, 'male');
addContributor('Eunice', 900, 'female');


updateBalance('Jerry', 400)