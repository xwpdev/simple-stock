using System;
using Microsoft.AspNetCore.SignalR;
using SimpleStockServer.Interfaces;

namespace SimpleStockServer
{
    public class BroadcastHub : Hub<IHubClient>
    {
        public BroadcastHub()
        {
            
        }
    }
}
