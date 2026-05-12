# Abstract — IVOA Interoperability Meeting, Strasbourg (June 2026)

**Session:** DSP / DAL

**Title:** *The Auth Challenge Mechanism for SRCNet IVOA DataLink Integration through the Product Streamer*

**Author:** Michele Delli Veneri - SKA Observatory

---

The SKA Observatory will produce on the order of 700 PB of science-ready data products per year, distributed across a federation of SKA Regional Centres (SRCNet). Every byte of SKAO data is gated behind OAuth2 access tokens issued by INDIGO IAM and validated by audience claim, there is no anonymous read path. This creates a friction point for generic VO clients such as TOPCAT, Aladin, or pyVO, which have no built-in knowledge of our identity provider.

We present the auth-challenge mechanism we have built across two SRCNet services, the IVOA DataLink implementation, and the Product Streamer to bootstrap such clients into the RCNet IAM. The Product Streamer responds to unauthenticated requests with an IVOA AuthVO `ivoa_bearer` challenge whose `discovery_url` field points at the OIDC well-known endpoint of IAM. From that one URL a naïve client can negotiate a scoped token for the `product-streamer-api` audience and retry the request; a second audience check is performed by a federation-level Permissions API to make sure that the client is authorized to access the data.

The bridge between the discovery layer and the auth challenge is the **service descriptor**: our DataLink response surfaces the co-located Product Streamer as a standard `adhoc:service` resource, so a client following a DataLink result also learns *where* to authenticate. We additionally describe a pragmatic divergence we introduced to scale DataLink for SKA dataset sizes (hundreds to thousands of constituent files per dataset, returned in a single VOTable with `#child` rows).
