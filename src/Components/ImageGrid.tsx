export default function ImageGrid({
    components,
}: {
    components: JSX.Element[];
}) {
    return (
        <div className="flex flex-wrap mx-[5%] w-[90%]  justify-center">
            {[components]}
        </div>
    );
}
