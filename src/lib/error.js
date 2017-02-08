export function dataError(e) {
    console.error(e);
    alert(`${e.statusCode} ${e.statusText}`);
}