export const About=()=>{
    return(
        <div className="h-[400px] w-max-screen p-[60px] px-[120px] mt-[50px]">
            <div className="font-bold text-2xl tracking-tight">what is runix?</div>
            <div className="tracking-tighter text-xl">runix allows users to deploy their code seamlessly with minimal time , with efficient workflow and scalable architecture our design handles everything.
                runix currently supports only Javascript and its <br/>related frameworks for deploying.
                <br/>Uses redis and ecs for scalable and efficient approach and maintains a persistent websocket connection to serve logs to the user for debugging and error management.
            </div>
        </div>
    )
    
}