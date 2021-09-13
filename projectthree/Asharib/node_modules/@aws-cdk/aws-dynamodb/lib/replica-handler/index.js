"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCompleteHandler = exports.onEventHandler = void 0;
const aws_sdk_1 = require("aws-sdk"); // eslint-disable-line import/no-extraneous-dependencies
async function onEventHandler(event) {
    console.log('Event: %j', event);
    const dynamodb = new aws_sdk_1.DynamoDB();
    let updateTableAction;
    if (event.RequestType === 'Create' || event.RequestType === 'Delete') {
        updateTableAction = event.RequestType;
    }
    else { // Update
        // This can only be a table replacement so we create a replica
        // in the new table. The replica for the "old" table will be
        // deleted when CF issues a Delete event on the old physical
        // resource id.
        updateTableAction = 'Create';
    }
    const data = await dynamodb.updateTable({
        TableName: event.ResourceProperties.TableName,
        ReplicaUpdates: [
            {
                [updateTableAction]: {
                    RegionName: event.ResourceProperties.Region,
                },
            },
        ],
    }).promise();
    console.log('Update table: %j', data);
    return event.RequestType === 'Create' || event.RequestType === 'Update'
        ? { PhysicalResourceId: `${event.ResourceProperties.TableName}-${event.ResourceProperties.Region}` }
        : {};
}
exports.onEventHandler = onEventHandler;
async function isCompleteHandler(event) {
    var _a, _b, _c;
    console.log('Event: %j', event);
    const dynamodb = new aws_sdk_1.DynamoDB();
    const data = await dynamodb.describeTable({
        TableName: event.ResourceProperties.TableName,
    }).promise();
    console.log('Describe table: %j', data);
    const tableActive = !!(((_a = data.Table) === null || _a === void 0 ? void 0 : _a.TableStatus) === 'ACTIVE');
    const replicas = (_c = (_b = data.Table) === null || _b === void 0 ? void 0 : _b.Replicas) !== null && _c !== void 0 ? _c : [];
    const regionReplica = replicas.find(r => r.RegionName === event.ResourceProperties.Region);
    const replicaActive = !!((regionReplica === null || regionReplica === void 0 ? void 0 : regionReplica.ReplicaStatus) === 'ACTIVE');
    switch (event.RequestType) {
        case 'Create':
        case 'Update':
            // Complete when replica is reported as ACTIVE
            return { IsComplete: tableActive && replicaActive };
        case 'Delete':
            // Complete when replica is gone
            return { IsComplete: tableActive && regionReplica === undefined };
    }
}
exports.isCompleteHandler = isCompleteHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSxxQ0FBbUMsQ0FBQyx3REFBd0Q7QUFFckYsS0FBSyxVQUFVLGNBQWMsQ0FBQyxLQUFxQjtJQUN4RCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUVoQyxNQUFNLFFBQVEsR0FBRyxJQUFJLGtCQUFRLEVBQUUsQ0FBQztJQUVoQyxJQUFJLGlCQUFpRCxDQUFDO0lBQ3RELElBQUksS0FBSyxDQUFDLFdBQVcsS0FBSyxRQUFRLElBQUksS0FBSyxDQUFDLFdBQVcsS0FBSyxRQUFRLEVBQUU7UUFDcEUsaUJBQWlCLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztLQUN2QztTQUFNLEVBQUUsU0FBUztRQUNoQiw4REFBOEQ7UUFDOUQsNERBQTREO1FBQzVELDREQUE0RDtRQUM1RCxlQUFlO1FBQ2YsaUJBQWlCLEdBQUcsUUFBUSxDQUFDO0tBQzlCO0lBRUQsTUFBTSxJQUFJLEdBQUcsTUFBTSxRQUFRLENBQUMsV0FBVyxDQUFDO1FBQ3RDLFNBQVMsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsU0FBUztRQUM3QyxjQUFjLEVBQUU7WUFDZDtnQkFDRSxDQUFDLGlCQUFpQixDQUFDLEVBQUU7b0JBQ25CLFVBQVUsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTTtpQkFDNUM7YUFDRjtTQUNGO0tBQ0YsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUV0QyxPQUFPLEtBQUssQ0FBQyxXQUFXLEtBQUssUUFBUSxJQUFJLEtBQUssQ0FBQyxXQUFXLEtBQUssUUFBUTtRQUNyRSxDQUFDLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxHQUFHLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLElBQUksS0FBSyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxFQUFFO1FBQ3BHLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDVCxDQUFDO0FBL0JELHdDQStCQztBQUVNLEtBQUssVUFBVSxpQkFBaUIsQ0FBQyxLQUF3Qjs7SUFDOUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFFaEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxrQkFBUSxFQUFFLENBQUM7SUFFaEMsTUFBTSxJQUFJLEdBQUcsTUFBTSxRQUFRLENBQUMsYUFBYSxDQUFDO1FBQ3hDLFNBQVMsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsU0FBUztLQUM5QyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBRXhDLE1BQU0sV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQUEsSUFBSSxDQUFDLEtBQUssMENBQUUsV0FBVyxNQUFLLFFBQVEsQ0FBQyxDQUFDO0lBQzdELE1BQU0sUUFBUSxlQUFHLElBQUksQ0FBQyxLQUFLLDBDQUFFLFFBQVEsbUNBQUksRUFBRSxDQUFDO0lBQzVDLE1BQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxLQUFLLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzRixNQUFNLGFBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBLGFBQWEsYUFBYixhQUFhLHVCQUFiLGFBQWEsQ0FBRSxhQUFhLE1BQUssUUFBUSxDQUFDLENBQUM7SUFFcEUsUUFBUSxLQUFLLENBQUMsV0FBVyxFQUFFO1FBQ3pCLEtBQUssUUFBUSxDQUFDO1FBQ2QsS0FBSyxRQUFRO1lBQ1gsOENBQThDO1lBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxJQUFJLGFBQWEsRUFBRSxDQUFDO1FBQ3RELEtBQUssUUFBUTtZQUNYLGdDQUFnQztZQUNoQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsSUFBSSxhQUFhLEtBQUssU0FBUyxFQUFFLENBQUM7S0FDckU7QUFDSCxDQUFDO0FBeEJELDhDQXdCQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbmltcG9ydCB0eXBlIHsgSXNDb21wbGV0ZVJlcXVlc3QsIElzQ29tcGxldGVSZXNwb25zZSwgT25FdmVudFJlcXVlc3QsIE9uRXZlbnRSZXNwb25zZSB9IGZyb20gJ0Bhd3MtY2RrL2N1c3RvbS1yZXNvdXJjZXMvbGliL3Byb3ZpZGVyLWZyYW1ld29yay90eXBlcyc7XG5pbXBvcnQgeyBEeW5hbW9EQiB9IGZyb20gJ2F3cy1zZGsnOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gb25FdmVudEhhbmRsZXIoZXZlbnQ6IE9uRXZlbnRSZXF1ZXN0KTogUHJvbWlzZTxPbkV2ZW50UmVzcG9uc2U+IHtcbiAgY29uc29sZS5sb2coJ0V2ZW50OiAlaicsIGV2ZW50KTtcblxuICBjb25zdCBkeW5hbW9kYiA9IG5ldyBEeW5hbW9EQigpO1xuXG4gIGxldCB1cGRhdGVUYWJsZUFjdGlvbjogJ0NyZWF0ZScgfCAnVXBkYXRlJyB8ICdEZWxldGUnO1xuICBpZiAoZXZlbnQuUmVxdWVzdFR5cGUgPT09ICdDcmVhdGUnIHx8IGV2ZW50LlJlcXVlc3RUeXBlID09PSAnRGVsZXRlJykge1xuICAgIHVwZGF0ZVRhYmxlQWN0aW9uID0gZXZlbnQuUmVxdWVzdFR5cGU7XG4gIH0gZWxzZSB7IC8vIFVwZGF0ZVxuICAgIC8vIFRoaXMgY2FuIG9ubHkgYmUgYSB0YWJsZSByZXBsYWNlbWVudCBzbyB3ZSBjcmVhdGUgYSByZXBsaWNhXG4gICAgLy8gaW4gdGhlIG5ldyB0YWJsZS4gVGhlIHJlcGxpY2EgZm9yIHRoZSBcIm9sZFwiIHRhYmxlIHdpbGwgYmVcbiAgICAvLyBkZWxldGVkIHdoZW4gQ0YgaXNzdWVzIGEgRGVsZXRlIGV2ZW50IG9uIHRoZSBvbGQgcGh5c2ljYWxcbiAgICAvLyByZXNvdXJjZSBpZC5cbiAgICB1cGRhdGVUYWJsZUFjdGlvbiA9ICdDcmVhdGUnO1xuICB9XG5cbiAgY29uc3QgZGF0YSA9IGF3YWl0IGR5bmFtb2RiLnVwZGF0ZVRhYmxlKHtcbiAgICBUYWJsZU5hbWU6IGV2ZW50LlJlc291cmNlUHJvcGVydGllcy5UYWJsZU5hbWUsXG4gICAgUmVwbGljYVVwZGF0ZXM6IFtcbiAgICAgIHtcbiAgICAgICAgW3VwZGF0ZVRhYmxlQWN0aW9uXToge1xuICAgICAgICAgIFJlZ2lvbk5hbWU6IGV2ZW50LlJlc291cmNlUHJvcGVydGllcy5SZWdpb24sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF0sXG4gIH0pLnByb21pc2UoKTtcbiAgY29uc29sZS5sb2coJ1VwZGF0ZSB0YWJsZTogJWonLCBkYXRhKTtcblxuICByZXR1cm4gZXZlbnQuUmVxdWVzdFR5cGUgPT09ICdDcmVhdGUnIHx8IGV2ZW50LlJlcXVlc3RUeXBlID09PSAnVXBkYXRlJ1xuICAgID8geyBQaHlzaWNhbFJlc291cmNlSWQ6IGAke2V2ZW50LlJlc291cmNlUHJvcGVydGllcy5UYWJsZU5hbWV9LSR7ZXZlbnQuUmVzb3VyY2VQcm9wZXJ0aWVzLlJlZ2lvbn1gIH1cbiAgICA6IHt9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaXNDb21wbGV0ZUhhbmRsZXIoZXZlbnQ6IElzQ29tcGxldGVSZXF1ZXN0KTogUHJvbWlzZTxJc0NvbXBsZXRlUmVzcG9uc2U+IHtcbiAgY29uc29sZS5sb2coJ0V2ZW50OiAlaicsIGV2ZW50KTtcblxuICBjb25zdCBkeW5hbW9kYiA9IG5ldyBEeW5hbW9EQigpO1xuXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBkeW5hbW9kYi5kZXNjcmliZVRhYmxlKHtcbiAgICBUYWJsZU5hbWU6IGV2ZW50LlJlc291cmNlUHJvcGVydGllcy5UYWJsZU5hbWUsXG4gIH0pLnByb21pc2UoKTtcbiAgY29uc29sZS5sb2coJ0Rlc2NyaWJlIHRhYmxlOiAlaicsIGRhdGEpO1xuXG4gIGNvbnN0IHRhYmxlQWN0aXZlID0gISEoZGF0YS5UYWJsZT8uVGFibGVTdGF0dXMgPT09ICdBQ1RJVkUnKTtcbiAgY29uc3QgcmVwbGljYXMgPSBkYXRhLlRhYmxlPy5SZXBsaWNhcyA/PyBbXTtcbiAgY29uc3QgcmVnaW9uUmVwbGljYSA9IHJlcGxpY2FzLmZpbmQociA9PiByLlJlZ2lvbk5hbWUgPT09IGV2ZW50LlJlc291cmNlUHJvcGVydGllcy5SZWdpb24pO1xuICBjb25zdCByZXBsaWNhQWN0aXZlID0gISEocmVnaW9uUmVwbGljYT8uUmVwbGljYVN0YXR1cyA9PT0gJ0FDVElWRScpO1xuXG4gIHN3aXRjaCAoZXZlbnQuUmVxdWVzdFR5cGUpIHtcbiAgICBjYXNlICdDcmVhdGUnOlxuICAgIGNhc2UgJ1VwZGF0ZSc6XG4gICAgICAvLyBDb21wbGV0ZSB3aGVuIHJlcGxpY2EgaXMgcmVwb3J0ZWQgYXMgQUNUSVZFXG4gICAgICByZXR1cm4geyBJc0NvbXBsZXRlOiB0YWJsZUFjdGl2ZSAmJiByZXBsaWNhQWN0aXZlIH07XG4gICAgY2FzZSAnRGVsZXRlJzpcbiAgICAgIC8vIENvbXBsZXRlIHdoZW4gcmVwbGljYSBpcyBnb25lXG4gICAgICByZXR1cm4geyBJc0NvbXBsZXRlOiB0YWJsZUFjdGl2ZSAmJiByZWdpb25SZXBsaWNhID09PSB1bmRlZmluZWQgfTtcbiAgfVxufVxuIl19