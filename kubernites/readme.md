Kubernetis for scale FASTER AND BEYOND AWS AUTOSCALING


Minikube is a way to let you get invovled.



Object:

- JSON or YAML
- Yaml recommended
- defines object as a file




Pod: App is a pod.

- Atomic app unit container: 
- They can share a port space
- can share docker volume
- Pod is the idea of things talking to each other in localhost. Pods ephemeral.
- Kubernetis can decide to kill pod at any time based on network node or a hardware failure and bring it up on a way to not depend on normal state to come back up functioning.
- Nodes are the working machine that run and deploy. That's the beefy hardware that does the grunt work.
- Distributed replicas are the advantage. Physical notes hopefully distributed geographically across the zones you try to support. Replicas are a replica of the pod. Duplicated across nodes. High availability. If a single node crashes for any hardware/network reason, the replicas keep it going. Customers face no interruption of service.
- Pods have health and readiness checks. You can configure them and query them to get useful information.

