// A small helper: a Promsie that finishes after 'ms' milliseconds
function wait(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}

// A pretend "server" that returns a fake user after a small delay.

function getUserFromServer(id) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ id: id, name: 'Student ${id}' })
        }, 400)
    })
}

async function main() {
    console.log('=== 1. Promises & Async/Await ===\n');

    // --------- A) Using .then ------
    console.log('A) .then style');   // Log's first, then waits for the promise to resolve
    console.log('   start');         // Log's start first, then waits for the promise to resolve
    await wait(500).then(() => {          // After 500ms passes, the promise resolves and the .then callback is called
        console.log('  500ms passed');  //  Log's after the promise resolves, which is after 500ms has passed
    });

    // --------- B) Using async/await ------
    console.log('\nB) async/await style (does the same thing)');
    console.log('   start');
    await wait(500);
    console.log('  500ms passed');

    // --------- C) Getting a user from the "server" ------
    console.log('\nC) Calling a fake server"');
    console.log('     asking for user 7...');
    const user = await getUserFromServer(7);
    console.log('     got user:', user);

    // --------- D) Doing work in PARALLEL with Promise.all ------
    // If three jobs do not depends on each other, run them at the
    // same time. They all finish in the time of the SLOWEST one.
    console.log('\nD) Doing work in PARALLEL with Promise.all');
    console.log('   Starting 3 things at the same time...');
    const start = Date.now();
    await Promise.all([wait(300), wait(300), wait(300)]);
    const elapsed = Date.now() - start;
    console.log(' all 3 finished in about ${elapsed}ms');
    console.log(' (one by one would take about 900ms)');

    // --------- E) Handling errors with try/catch ------
    console.log('\nE) Handling errors with try/catch');
    try {
        await new Promise((_, reject) => {
            reject(new Error('Something went wrong!'));
        });
    } catch (err) {
        console.log('Caught an error:', err.message);   
    }
    console.log('\n Done.\n');

}

main();